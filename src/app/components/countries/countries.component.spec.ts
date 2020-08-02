import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  beforeEach(async(() => {
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
    expect(component)
      .toBeTruthy();
  });

  describe('Country Component properties', () => {

    it('Should have an undefined mode$ property before initialization', () => {
      expect(component.mode$)
        .toBeUndefined();
    });

    it('Should have an initial numberOfShownCountries property with the value of 25 before initialization', () => {
      expect(component.numberOfShownCountries)
        .toEqual(25);
    });

    it('Should have an initial isShown property with the value of true before initialization', () => {
      expect(component.isShown)
        .toEqual(true);
    });

    it('Should have an undefined searchFilter property before initialization', () => {
      expect(component.searchFilter)
        .toBeUndefined();
    });

    it('Should have an undefined regionFilter property before initialization', () => {
      expect(component.regionFilter)
        .toBeUndefined();
    });

    it('Should have an undefined countries property before initialization', () => {
      expect(component.countries)
        .toBeUndefined();
    });

    it('Should initialize properties after initialization', () => {
      spyOn(
        countryService,
        'getAllCountries'
      ).and.returnValue(of(countries));

      component.ngOnInit();

      expect(component.countries)
        .toBeDefined();

      expect(component.mode$)
        .toBeDefined();

      expect(component.countries)
        .toEqual(countries);
    });

  });

  it('Should show more countries', () => {
    component.onShowMoreClick();

    expect(component.numberOfShownCountries)
      .toEqual(50);

    setTotalNumerOfCountriesTo250(component);

    component.onShowMoreClick();

    expect(component.numberOfShownCountries)
      .toEqual(250);

    expect(component.isShown)
      .toEqual(false);
  });

  it('Should emit searchValue', () => {
    component.onSearchChange('Austria');

    expect(component.searchFilter)
      .toEqual('Austria');
  });

  it('Should emit regionFilter', () => {
    component.onSearchChange('Asia');

    expect(component.searchFilter)
      .toEqual('Asia');
  });

  it('Should track by country name', () => {
    expect(component.trackBy(syria))
      .toEqual('Syria');
  });

});

function setTotalNumerOfCountriesTo250(countriesComponent: CountriesComponent): void {
  countriesComponent.numberOfShownCountries = 250;
}
