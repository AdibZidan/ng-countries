import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { ThemeService } from '@shared/services/theme/theme.service';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let themeService: ThemeService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });

    it('Should have a defined isDarkMode property', () => {
      expect(component.isDarkMode).toEqual(true);
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should initialize mode$ property', (doneFn: DoneFn) => {
      expect(component.mode$).toBeDefined();

      component.mode$.subscribe(
        (theme: Theme): void => {
          expect(theme).toEqual('dark');
          doneFn();
        });
    });

    it('Should dynamically toggle mode properties', () => {
      spyOn(themeService, 'toggleTheme');

      component.onThemeToggle();

      expect(themeService.toggleTheme).toHaveBeenCalled();
      expect(themeService.toggleTheme).toHaveBeenCalledTimes(1);
      expect(component.isDarkMode).toEqual(false);
    });
  });

});
