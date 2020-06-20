import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public getAllCountries(): Observable<Country[]> {
    const url: string = 'https://restcountries.eu/rest/v2/all';

    return this.httpClient.get<Country[]>(url);
  }

  public getCountry(name: string): Observable<Country> {
    const url: string = `https://restcountries.eu/rest/v2/name/${name}`;

    return this.httpClient.get<Country>(url);
  }

}
