import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { Country } from '@shared/interfaces/country.interface';
import { getCountries, syria } from '@shared/mocks/country.mock';
import { ClickPipe } from '@shared/pipes/click/click.pipe';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';
import { CountryService } from '@shared/services/country/country.service';
import { of } from 'rxjs';
import { CountriesComponent } from './countries.component';
import { FilterComponent } from './filter/filter.component';

describe('Countries Component', () => {

  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let countryService: CountryService;
  let countries: Country[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CountriesComponent,
        FilterComponent,
        FilterPipe,
        ClickPipe
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    countryService = TestBed.inject(CountryService);
    countries = getCountries();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });

    it('Should have a defined numberOfShownCountries property', () => {
      expect(component.numberOfShownCountries).toEqual(25);
    });

    it('Should have a defined isShown property', () => {
      expect(component.isShown).toEqual(true);
    });

    it('Should have a defined searchFilter property', () => {
      expect(component.searchFilter).toEqual('');
    });

    it('Should have a defined regionFilter property', () => {
      expect(component.regionFilter).toEqual('');
    });

    it('Should have a defined countries property', () => {
      expect(component.countries).toEqual([]);
    });
  });

  describe('After initialization', () => {
    let getAllCountriesSpy: jasmine.Spy;

    beforeEach(() => {
      getAllCountriesSpy = spyOn(countryService, 'getAllCountries').and.returnValue(of(countries));
      component.ngOnInit();
    });

    it('Should initialize properties', (doneFn: DoneFn) => {
      expect(getAllCountriesSpy).toHaveBeenCalled();
      expect(component.countries).toBeDefined();
      expect(component.mode$).toBeDefined();
      expect(component.countries).toEqual(countries);

      component.mode$.subscribe((theme: Theme): void => {
        expect(theme).toEqual('dark');
        doneFn();
      });
    });

    it('Should show more countries', () => {
      component.onShowMoreClick();

      expect(component.numberOfShownCountries).toEqual(50);

      setTotalNumberOfCountriesTo250(component);

      component.onShowMoreClick();

      expect(component.numberOfShownCountries).toEqual(250);
      expect(component.isShown).toEqual(false);
    });

    it('Should emit searchValue', () => {
      component.onSearchChange('Austria');

      expect(component.searchFilter).toEqual('Austria');
    });

    it('Should emit regionClick', () => {
      component.onRegionClick('Asia');

      expect(component.regionFilter).toEqual('Asia');
    });

    it('Should emit regionFilter', () => {
      component.onSearchChange('Asia');

      expect(component.searchFilter).toEqual('Asia');
    });

    it('Should track by country name', () => {
      expect(component.trackBy(syria)).toEqual('Syria');
    });
  });

});

function setTotalNumberOfCountriesTo250(countriesComponent: CountriesComponent): void {
  countriesComponent.numberOfShownCountries = 250;
}
