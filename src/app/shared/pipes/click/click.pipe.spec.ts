import { Country } from '@shared/interfaces/country.interface';
import { getCountries } from '@shared/mocks/country.mock';
import { ClickPipe } from './click.pipe';

describe('Filter Pipe', () => {

  let pipe: ClickPipe;
  let countries: Country[];

  beforeEach(() => {
    pipe = new ClickPipe();
    countries = getCountries();
  });

  it('Should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return the list of countries array if no filter keyword is given', () => {
    expect(pipe.transform(countries, '')).toEqual(countries);
  });

  it('Should filter countries', () => {
    const ukraineAndAustria: Country[] = [countries[1], countries[2]];

    expect(pipe.transform(countries, 'Eu')).toEqual(ukraineAndAustria);
  });

  it('Should return an empty countries array if given a wrong filter keyword', () => {
    expect(pipe.transform(countries, '...')).toEqual([]);
  });

});
