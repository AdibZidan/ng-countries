import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@shared/interfaces/country.interface';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly _url: string = 'https://restcountries.eu/rest/v2';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCountries$(): Observable<Country[]> {
    const url: string = `${this._url}/all`;

    return this.httpClient.get<Country[]>(url);
  }

  public getCountry$(name: string): Observable<Country> {
    const url: string = `${this._url}/name/${name}`;

    return this.httpClient
      .get<Country[]>(url)
      .pipe(
        this.convertCountriesArrayToSingleCountry()
      );
  }

  public getCountryCode$(codes: string[]): Observable<string[]> {
    if (!codes || !codes.length) {
      return;
    }

    const url: string = `${this._url}/alpha?codes=${codes.join(';')}`;

    return this.httpClient.get<string[]>(url);
  }

  private convertCountriesArrayToSingleCountry(): OperatorFunction<Country[], Country> {
    return map((countries: Country[]): Country => countries[0]);
  }

}
