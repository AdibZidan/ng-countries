import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private _isVisibleState$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  public get isVisibleState$(): Observable<boolean> {
    return this._isVisibleState$.asObservable();
  }

  public setIsVisibleStateTo(value: boolean): void {
    this._isVisibleState$.next(value);
  }

}
