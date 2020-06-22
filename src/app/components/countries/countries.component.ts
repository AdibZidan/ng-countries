import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/shared/services/country/country.service';
import { Theme } from '../../shared/enums/theme.enum';
import { Country } from '../../shared/interfaces/country.interface';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  public mode$: Observable<Theme>;

  public countries$: Observable<Country[]>;

  public numberOfShownCountries: number = 25;
  public isShown: boolean = true;

  constructor(
    private countryService: CountryService,
    private themeService: ThemeService
  ) { }

  public ngOnInit(): void {
    this.getCountries();
    this.getMode();
  }

  public onShowMoreClick(): void {
    const totalNumberOfCountries: number = 250;

    this.numberOfShownCountries += 25;

    if (this.numberOfShownCountries >= totalNumberOfCountries) {
      this.isShown = false;
      this.numberOfShownCountries = totalNumberOfCountries;
    }
  }

  private getCountries(): Observable<Country[]> {
    return this.countries$ = this.countryService.getAllCountries();
  }

  private getMode(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
