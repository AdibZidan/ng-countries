import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, OperatorFunction } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Country } from '../../../shared/interfaces/country.interface';
import { CountryService } from '../../../shared/services/country/country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public country$: Observable<Country>;
  public borderCountry$: Observable<Country>;

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getCountry();
  }

  public getCountry(): Observable<Country> {
    const country: string = this.activatedRoute
      .snapshot
      .params
      .country;

    return this.country$ = this.countryService
      .getCountry(country)
      .pipe(
        this.mergeWithBorderCountries()
      );
  }

  private mergeWithBorderCountries(): OperatorFunction<Country, Country> {
    return mergeMap(
      (country: Country): Observable<Country> => {
        this.getCountryBorderCodes(country.borders);

        return of(country);
      });
  }

  private getCountryBorderCodes(codes: string[]): void {
    this.borderCountry$ = this.countryService.getCountryCode(codes);
  }

}
