import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { syria } from '@shared/mocks/country.mock';
import { CountryComponent } from './country.component';

describe('Country Component', () => {

  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined country property', () => {
      expect(component.country).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    it('Should have a defined country property', () => {
      component.country = syria;

      expect(component.country).toEqual(syria);
    });
  });

});
