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

    it('Should initialize properties after initialization', () => {
      component.ngOnInit();

      expect(component.countries$)
        .toBeDefined();

      expect(component.mode$)
        .toBeDefined();
    });

  });

});
