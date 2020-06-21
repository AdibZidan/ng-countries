import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url: string = `https://restcountries.eu/rest/v2`;

  constructor(private httpClient: HttpClient) { }

  public getAllCountries(): Observable<Country[]> {
    const url: string = `${this.url}/all`;

    return this.httpClient.get<Country[]>(url);
  }

  public getCountry(name: string): Observable<Country> {
    const url: string = `${this.url}/name/${name}`;

    return this.httpClient
      .get<Country[]>(url)
      .pipe(
        this.convertCountriesArrayToSingleCountry()
      );
  }

  private convertCountriesArrayToSingleCountry(): OperatorFunction<Country[], Country> {
    return map((countries: Country[]): Country => countries[0]);
  }

}
