import { TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { ThemeService } from './theme.service';

describe('Theme Service', () => {

  let themeService: ThemeService;

  beforeEach(() => {
    themeService = TestBed.inject(ThemeService);
  });

  it('Should be created', () => {
    expect(themeService)
      .toBeTruthy();
  });

  it('Should have an initial dark theme', () => {
    themeService
      .mode$
      .subscribe(
        (theme: Theme): void => {
          expect(theme).toEqual('dark');
        }
      );
  });

  it('Should toggle the theme dynamically', () => {
    themeService.toggleTheme();

    themeService
      .mode$
      .subscribe(
        (theme: Theme): void => {
          expect(theme).toEqual('light');
        }
      );
  });

});
