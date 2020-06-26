import { async, TestBed } from '@angular/core/testing';
import { Country } from '../../interfaces/country.interface';
import { getCountries } from '../../mocks/country.mock';
import { FilterPipe } from './filter.pipe';

describe('Filter Pipe', () => {

  let pipe: FilterPipe;

  let countries: Country[];
  let searchFilter: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FilterPipe]
    });
  }));

  beforeEach(() => {
    pipe = new FilterPipe();

    countries = getCountries();
    searchFilter = 'Syria';
  });

  it('Should create', () => {
    expect(pipe)
      .toBeTruthy();
  });

  it('Should filter countries', () => {
    spyOn(
      pipe,
      'transform'
    );

    pipe.transform(countries, searchFilter);

    expect(pipe.transform)
      .toHaveBeenCalledWith(countries, 'Syria');
  });

});
