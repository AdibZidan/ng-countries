import { Country } from '@shared/interfaces/country.interface';
import { HttpClientSpy } from '@shared/interfaces/http-client-spy.interface';
import { getCountries, syria } from '@shared/mocks/country.mock';
import { getHttpClientSpy } from '@shared/mocks/http-client-spy.mock';
import { of } from 'rxjs';
import { CountryService } from './country.service';

describe('Country Service', () => {

  let httpClientSpy: HttpClientSpy;
  let countryService: CountryService;
  let countriesMock: Country[];

  beforeEach(() => {
    httpClientSpy = getHttpClientSpy();
    countryService = new CountryService(httpClientSpy as any);
    countriesMock = getCountries();
  });

  it('Should be created', () => {
    expect(countryService)
      .toBeTruthy();
  });

  it('Should get all countries', () => {
    httpClientSpy.get.and.returnValue(
      of(countriesMock)
    );

    countryService
      .getAllCountries()
      .subscribe(
        (countries: Country[]): void => {
          const actualCountryNames: string[] = countries.map((country: Country) => country.name);
          const expectedCountryNames: string[] = ['Syria', 'Ukraine', 'Austria'];

          expect(actualCountryNames.length).toEqual(3);
          expect(actualCountryNames).toEqual(expectedCountryNames);
        });

    expect(
      httpClientSpy.get.calls.count()
    ).toEqual(1);
  });

  it('Should get a specific country', () => {
    httpClientSpy.get.and.returnValue(
      of([syria])
    );

    countryService
      .getCountry('Syria')
      .subscribe(
        (country: Country): void => {
          expect(country).toEqual(syria);
          expect(country.name).toEqual('Syria');
        });

    expect(
      httpClientSpy.get.calls.count()
    ).toEqual(1);
  });

});
