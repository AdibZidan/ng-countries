import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { syria } from '../../../shared/mocks/country.mock';
import { CountryComponent } from './country.component';

describe('Country Component', () => {

  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component)
      .toBeTruthy();
  });

  it('Should have an undefined country property before initialization', () => {
    expect(component.country)
      .toBeUndefined();
  });

  it('Should have a defined country property after initialization', () => {
    component.country = syria;

    expect(component.country)
      .toEqual(syria);
  });

});
