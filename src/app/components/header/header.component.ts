import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../../shared/enums/theme.enum';
import { ThemeService } from '../../shared/services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mode$: Observable<Theme>;

  public isDarkMode: boolean = true;
  public isLightMode: boolean = false;

  constructor(private themeService: ThemeService) { }

  public ngOnInit(): void {
    this.getMode();
  }

  public onThemeToggle(): void {
    this.themeService.toggleTheme();
    this.onModeToggle();
  }

  private onModeToggle(): void {
    this.isDarkMode = !this.isDarkMode;
    this.isLightMode = !this.isLightMode;
  }

  private getMode(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
