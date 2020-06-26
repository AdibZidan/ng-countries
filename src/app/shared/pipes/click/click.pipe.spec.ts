import { async, TestBed } from '@angular/core/testing';
import { Country } from '../../interfaces/country.interface';
import { getCountries } from '../../mocks/country.mock';
import { ClickPipe } from './click.pipe';

describe('Filter Pipe', () => {

  let pipe: ClickPipe;

  let countries: Country[];
  let regionFilter: string;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClickPipe]
    });
  }));

  beforeEach(() => {
    pipe = new ClickPipe();

    countries = getCountries();
    regionFilter = 'Asia';
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

    pipe.transform(countries, regionFilter);

    expect(pipe.transform)
      .toHaveBeenCalledWith(countries, 'Asia');
  });

});
