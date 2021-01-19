import { Country } from '@shared/interfaces/country.interface';
import { getCountries } from '@shared/mocks/country.mock';
import { FilterPipe } from './filter.pipe';

describe('Filter Pipe', () => {

  let pipe: FilterPipe;
  let countries: Country[];

  beforeEach(() => {
    pipe = new FilterPipe();
    countries = getCountries();
  });

  it('Should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return a list of countries array if given no search filter', () => {
    expect(pipe.transform(countries, '')).toEqual(countries);
  });

  it('Should not return a list of countries if given an incorrect search filter value', () => {
    expect(pipe.transform(countries, '...')).toEqual([]);
  });

  it('Should filter countries', () => {
    const syria: Country[] = [countries[0]];

    expect(pipe.transform(countries, 'Syria')).toEqual(syria);
  });

});
