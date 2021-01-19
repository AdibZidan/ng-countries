import { Component, OnDestroy, OnInit } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';
import { Country } from '@shared/interfaces/country.interface';
import { CountryService } from '@shared/services/country/country.service';
import { PropertyService } from '@shared/services/property/property.service';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription[] = [];
  private _CACHE_KEY: string = 'countries_cache';

  public mode$!: Observable<Theme>;
  public isVisibleState$!: Observable<boolean>;

  public numberOfShownCountries: number = 25;
  public isShown: boolean = true;
  public searchFilter: string = '';
  public regionFilter: string = '';
  public countries: Country[] = [];

  constructor(
    private countryService: CountryService,
    private themeService: ThemeService,
    private propertyService: PropertyService
  ) { }

  public ngOnInit(): void {
    this.getCountries();
    this.getMode();
    this.getIsVisibleState();
  }

  public ngOnDestroy(): void {
    this._subscriptions
      .forEach((subscription: Subscription): void => {
        subscription.unsubscribe();
      });
  }

  public onShowMoreClick(): void {
    const totalNumberOfCountries: number = 250;

    this.numberOfShownCountries += 25;

    if (this.numberOfShownCountries >= totalNumberOfCountries) {
      this.isShown = false;
      this.numberOfShownCountries = totalNumberOfCountries;
    }
  }

  public onSearchChange(searchValue: string): void {
    this.searchFilter = searchValue;
  }

  public onRegionClick(regionValue: string): void {
    this.regionFilter = regionValue;
  }

  public trackBy(country: Country): string {
    return country.name;
  }

  private getCountries(): void {
    this.prepareCache(this._CACHE_KEY);
    this.tryCaching();
  }

  private prepareCache(CACHE_KEY: string): void {
    const subscription: Subscription = this.countryService
      .getAllCountries()
      .subscribe((countries: Country[]): string =>
        localStorage[CACHE_KEY] = JSON.stringify(countries)
      );

    this._subscriptions.push(subscription);
  }

  private tryCaching(): void {
    const subscription: Subscription = this.countryService
      .getAllCountries()
      .pipe(startWith(JSON.parse(localStorage[this._CACHE_KEY] || '[]')))
      .subscribe((countries: Country[]): Country[] =>
        this.countries = countries
      );

    this._subscriptions.push(subscription);
  }

  private getMode(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

  private getIsVisibleState(): Observable<boolean> {
    return this.isVisibleState$ = this.propertyService.isVisibleState$;
  }

}
