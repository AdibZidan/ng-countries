import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Theme } from '@shared/enums/theme.enum';
import { Country } from '@shared/interfaces/country.interface';
import { syria } from '@shared/mocks/country.mock';
import { CountryService } from '@shared/services/country/country.service';
import { of } from 'rxjs';
import { DetailComponent } from './detail.component';

describe('Detail Component', () => {

  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let countryService: CountryService;
  let activatedRoute: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                country: 'Syria'
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    countryService = TestBed.inject(CountryService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });

    it('Should have an undefined country$ property', () => {
      expect(component.country$).toBeUndefined();
    });

    it('Should have an undefined borderCountry$ property', () => {
      expect(component.borderCountry$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    let getCountrySpy: jasmine.Spy;
    let getCountryCodeSpy: jasmine.Spy;

    beforeEach(() => {
      getCountrySpy = spyOn(countryService, 'getCountry').and.returnValue(of(syria));
      getCountryCodeSpy = spyOn(countryService, 'getCountryCode').and.returnValue(of(syria.borders));
      component.ngOnInit();
    });

    it('Should have a defined mode$ property', (doneFn: DoneFn) => {
      expect(component.mode$).toBeDefined();

      component.mode$.subscribe((theme: Theme): void => {
        expect(theme).toEqual('dark');
        doneFn();
      });
    });

    it('Should have a defined country$ property', (doneFn: DoneFn) => {
      expect(component.country$).toBeDefined();
      expect(getCountrySpy).toHaveBeenCalled();
      expect(getCountrySpy).toHaveBeenCalledTimes(1);
      expect(getCountrySpy).toHaveBeenCalledWith(activatedRoute.snapshot.params.country);

      component.country$.subscribe((country: Country): void => {
        expect(country).toEqual(syria);
        doneFn();
      });
    });

    it('Should have a defined borderCountry$ property', (doneFn: DoneFn) => {
      fixture.detectChanges();

      const expectedCodes: string[] = ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'];

      expect(component.borderCountry$).toBeDefined();
      expect(getCountryCodeSpy).toHaveBeenCalledWith(expectedCodes);

      component.borderCountry$
        .subscribe((actualCodes: string[]): void => {
          expect(actualCodes).toEqual(expectedCodes);
          doneFn();
        });
    });

    it('Should get a specific country via the url and assign country$ property to a country', (doneFn: DoneFn) => {
      const country: string = activatedRoute.snapshot.params.country;

      expect(getCountrySpy).toHaveBeenCalled();
      expect(getCountrySpy).toHaveBeenCalledTimes(1);
      expect(getCountrySpy).toHaveBeenCalledWith(country);
      expect(component.country$).toBeDefined();

      component.country$.subscribe((actualCountry: Country): void => {
        expect(actualCountry.name).toEqual('Syria');
        doneFn();
      });
    });
  });

});
