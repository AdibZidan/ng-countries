import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';

describe('Countries Component', () => {

  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
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

    it('Should have an undefined countries$ property before initialization', () => {
      expect(component.countries$)
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

    it('Should initialize properties after initialization', () => {
      component.ngOnInit();

      expect(component.countries$)
        .toBeDefined();

      expect(component.mode$)
        .toBeDefined();
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

});

function setTotalNumerOfCountriesTo250(countriesComponent: CountriesComponent): void {
  countriesComponent.numberOfShownCountries = 250;
}
