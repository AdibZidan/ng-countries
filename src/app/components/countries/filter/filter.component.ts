import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/shared/enums/theme.enum';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public mode$: Observable<Theme>;

  public isVisible: boolean = false;
  public filterRegions: string[];

  constructor(private themeService: ThemeService) { }

  public ngOnInit(): void {
    this.getFilterRegions();

    this.getMode$();
  }

  public getFilterRegions(): string[] {
    return this.filterRegions = [
      'Africa',
      'America',
      'Asia',
      'Europe',
      'Oceania'
    ];
  }

  public onFilterRegionsClick(): void {
    this.isVisible = !this.isVisible;
  }

  private getMode$(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
