import { Component, OnInit } from '@angular/core';
import { Theme } from '@shared/enums/theme.enum';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mode$!: Observable<Theme>;
  public isDarkMode: boolean = true;

  constructor(
    private themeService: ThemeService
  ) { }

  public ngOnInit(): void {
    this.getMode$();
  }

  public onThemeToggle(): void {
    this.themeService.toggleTheme();
    this.onModeToggle();
  }

  private onModeToggle(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  private getMode$(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
