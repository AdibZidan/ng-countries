import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
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

  beforeEach(waitForAsync(() => {
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
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should initialize mode$ property', (doneFn: DoneFn) => {
      expect(component.mode$).toBeDefined();

      component.mode$.subscribe((theme: Theme): void => {
        expect(theme).toEqual('dark');
        doneFn();
      });
    });

    it('Should handle isVisible state on route change', fakeAsync(() => {
      spyOn(propertyService, 'setIsVisibleStateTo');

      component.ngOnInit();

      router.navigate(['/']);

      tick();

      expect(propertyService.setIsVisibleStateTo).toHaveBeenCalledWith(true);
    }));
  });

});
