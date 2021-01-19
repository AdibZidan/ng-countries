import { TestBed } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { take } from 'rxjs/operators';
import { ThemeService } from './theme.service';

describe('Theme Service', () => {

  let themeService: ThemeService;

  beforeEach(() => {
    themeService = TestBed.inject(ThemeService);
  });

  it('Should be created', () => {
    expect(themeService).toBeTruthy();
  });

  it('Should have an initial dark theme', (doneFn: DoneFn) => {
    themeService.mode$.subscribe((theme: Theme): void => {
      expect(theme).toEqual('dark');
      doneFn();
    });
  });

  it('Should toggle the theme dynamically', () => {
    themeService.toggleTheme();

    themeService.mode$
      .pipe(take(1))
      .subscribe((theme: Theme): void => {
        expect(theme).toEqual('light');
      });

    themeService.toggleTheme();

    themeService.mode$
      .pipe(take(1))
      .subscribe((theme: Theme): void => {
        expect(theme).toEqual('dark');
      });
  });

});
