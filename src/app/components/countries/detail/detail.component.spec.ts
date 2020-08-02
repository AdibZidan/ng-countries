import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
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

  beforeEach(async(() => {
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
    expect(component)
      .toBeTruthy();
  });

  describe('Detail Component Properties', () => {

    it('Should have an undefined mode$ property before initialization', () => {
      expect(component.mode$)
        .toBeUndefined();
    });

    it('Should have an undefined country$ property before initialization', () => {
      expect(component.country$)
        .toBeUndefined();
    });

    it('Should have an undefined borderCountry$ property before initialization', () => {
      expect(component.borderCountry$)
        .toBeUndefined();
    });

    it('Should have defined mode$ property after initialization', () => {
      component.ngOnInit();

      expect(component.mode$)
        .toBeDefined();
    });

    it('Should have defined country$ property after initialization', () => {
      component.ngOnInit();

      expect(component.country$)
        .toBeDefined();
    });

    it('Should have defined borderCountry$ property after initialization', () => {
      const expectedCodes: string[] = ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR'];

      spyOn(
        countryService,
        'getCountry'
      ).and.returnValue(of(syria));

      spyOn(
        countryService,
        'getCountryCode'
      ).and.returnValue(of(syria.borders));

      spyOn(
        component,
        'getCountry'
      ).and.callThrough();

      fixture.detectChanges();

      expect(component.borderCountry$)
        .toBeDefined();

      expect(countryService.getCountryCode)
        .toHaveBeenCalledWith(expectedCodes);

      component
        .borderCountry$
        .subscribe((actualCodes: string[]): void => {
          expect(actualCodes)
            .toEqual(expectedCodes);
        });
    });

  });

  it('Should get a specific country via the url and assign country$ property to a country', () => {
    const country: string = activatedRoute.snapshot.params.country;

    spyOn(
      countryService,
      'getCountry'
    ).and.returnValue(of(syria));

    spyOn(
      component,
      'getCountry'
    ).and.callThrough();

    fixture.detectChanges();

    expect(countryService.getCountry)
      .toHaveBeenCalled();

    expect(countryService.getCountry)
      .toHaveBeenCalledWith(country);

    expect(component.country$)
      .toBeDefined();

    component
      .country$
      .subscribe(
        (actualCountry: Country): void => {
          expect(actualCountry.name)
            .toEqual('Syria');
        });
  });

});
