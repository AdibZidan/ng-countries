import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { getCountries, syria } from '../../mocks/country.mock';
import { CountryService } from './country.service';

describe('Country Service', () => {

  let countryService: CountryService;
  let httpTestingController: HttpTestingController;

  let countriesMock: Country[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  }));

  beforeEach(() => {
    countryService = TestBed.inject(CountryService);
    httpTestingController = TestBed.inject(HttpTestingController);

    countriesMock = getCountries();
  });

  afterEach(() => httpTestingController.verify());

  it('Should be created', () => {
    expect(countryService)
      .toBeTruthy();
  });

  it('Should get all countries', () => {
    spyOn(
      countryService,
      'getAllCountries'
    ).and.returnValue(
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
  });

  it('Should get a specific country', () => {
    spyOn(
      countryService, 'getCountry'
    ).and.returnValue(
      of(syria)
    );

    countryService
      .getCountry('Syria')
      .subscribe(
        (country: Country): void => {
          expect(country).toEqual(syria);
          expect(country.name).toEqual('Syria');
        });
  });

});
