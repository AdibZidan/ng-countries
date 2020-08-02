import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { Theme } from './shared/enums/theme.enum';
import { PropertyService } from './shared/services/property/property.service';

describe('Application Component', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let router: Router;

  let propertyService: PropertyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HeaderModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    propertyService = TestBed.inject(PropertyService);
  });

  it('Should create the application', () => {
    expect(component)
      .toBeTruthy();
  });

  it('Should have an undefined mode$ property before initialization', () => {
    expect(component.mode$)
      .toBeUndefined();
  });

  it('Should initialize mode$ property after initialization', () => {
    component.ngOnInit();

    expect(component.mode$)
      .toBeDefined();

    component
      .mode$
      .subscribe(
        (theme: Theme): void => {
          expect(theme).toEqual('dark');
        });
  });

  it('Should handle isVisible state on route change', fakeAsync(() => {
    spyOn(
      propertyService,
      'setIsVisibleStateTo'
    );

    component.ngOnInit();

    router.navigate(['/']);

    tick();

    expect(propertyService.setIsVisibleStateTo)
      .toHaveBeenCalledWith(true);
  }));

});
