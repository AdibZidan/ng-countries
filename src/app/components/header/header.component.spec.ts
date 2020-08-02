import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { ThemeService } from '@shared/services/theme/theme.service';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let themeService: ThemeService;

  beforeEach(async(() => {
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
    expect(component)
      .toBeTruthy();
  });

  describe('Header Compnent properties', () => {

    it('Should have an undefined mode$ property before initialization', () => {
      expect(component.mode$)
        .toBeUndefined();
    });

    it('Should have isDarkMode property with an initial value of true before initialization', () => {
      expect(component.isDarkMode)
        .toEqual(true);
    });

    it('Should have isLightMode property with an initial value of true before initialization', () => {
      expect(component.isLightMode)
        .toEqual(false);
    });

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

  it('Should dynamically toggle mode properties', () => {
    spyOn(themeService, 'toggleTheme');

    component.onThemeToggle();

    expect(
      themeService.toggleTheme
    ).toHaveBeenCalled();

    expect(component.isDarkMode)
      .toEqual(false);

    expect(component.isLightMode)
      .toEqual(true);
  });

});
