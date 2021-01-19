import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { MonoTypeOperatorFunction, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Theme } from './shared/enums/theme.enum';
import { PropertyService } from './shared/services/property/property.service';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private _subscription: Subscription = new Subscription();

  public mode$!: Observable<Theme>;

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private propertyService: PropertyService
  ) { }

  public ngOnInit(): void {
    this.getMode();
    this.handleIsVisibleStateOnRouteChange();
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private getMode(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

  private handleIsVisibleStateOnRouteChange(): void {
    this._subscription = this.router
      .events
      .pipe(this.instanceOfNavigationEnd())
      .subscribe((): void =>
        this.propertyService.setIsVisibleStateTo(true)
      );
  }

  private instanceOfNavigationEnd(): MonoTypeOperatorFunction<Event> {
    return filter((event: Event): boolean => event instanceof NavigationEnd);
  }

}
