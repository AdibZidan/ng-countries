import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Country } from 'src/app/shared/interfaces/country.interface';
import { syria } from 'src/app/shared/mocks/country.mock';
import { CountryService } from '../../../shared/services/country/country.service';
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

  it('Should have an undefined country$ property before initialization', () => {
    expect(component.country$)
      .toBeUndefined();
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
