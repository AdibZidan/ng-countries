import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';

describe('Country Component', () => {

  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent],
      imports: [HttpClientTestingModule]
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

  describe('Country Component properties', () => {

    it('Should have an undefined mode$ property before initialization', () => {
      expect(component.mode$)
        .toBeUndefined();
    });

    it('Should have an undefined countries$ property before initialization', () => {
      expect(component.countries$)
        .toBeUndefined();
    });

    it('Should initialize properties after initialization', () => {
      component.ngOnInit();

      expect(component.countries$)
        .toBeDefined();

      expect(component.mode$)
        .toBeDefined();
    });

  });

});
