import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './shared/enums/theme.enum';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mode$: Observable<Theme>;

  constructor(private themeService: ThemeService) { }

  public ngOnInit(): void {
    this.getMode();
  }

  private getMode(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
