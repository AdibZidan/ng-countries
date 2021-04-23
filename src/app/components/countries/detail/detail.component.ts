import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '@shared/enums/theme.enum';
import { Country } from '@shared/interfaces/country.interface';
import { CountryService } from '@shared/services/country/country.service';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Observable, of, OperatorFunction } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public mode$!: Observable<Theme>;
  public country$!: Observable<Country>;
  public borderCountry$!: Observable<string[]>;

  constructor(
    private themeService: ThemeService,
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getCountry$();
    this.getMode$();
  }

  public getCountry$(): Observable<Country> {
    const country: string = this.getCountryFromParams();

    return this.country$ = this.countryService
      .getCountry$(country)
      .pipe(
        this.mergeWithBorderCountries()
      );
  }

  private getCountryFromParams(): string {
    return this.activatedRoute
      .snapshot
      .params
      .country;
  }

  private mergeWithBorderCountries(): OperatorFunction<Country, Country> {
    return mergeMap(
      (country: Country): Observable<Country> => {
        this.getCountryBorderCodes(country.borders);

        return of(country);
      });
  }

  private getCountryBorderCodes(codes: string[]): void {
    this.borderCountry$ = this.countryService.getCountryCode$(codes);
  }

  private getMode$(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
