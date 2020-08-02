import { Injectable } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _mode$: BehaviorSubject<Theme> = new BehaviorSubject(Theme.DARK);

  public get mode$(): Observable<Theme> {
    return this._mode$.asObservable();
  }

  public toggleTheme(): void {
    if (this._mode$.value === Theme.DARK) {
      this._mode$.next(Theme.LIGHT);
    } else {
      this._mode$.next(Theme.DARK);
    }
  }

}
