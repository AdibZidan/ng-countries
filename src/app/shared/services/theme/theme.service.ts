import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from '../../enums/theme.enum';

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
