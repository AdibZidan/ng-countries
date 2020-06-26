import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from '../../../shared/enums/theme.enum';
import { ThemeService } from '../../../shared/services/theme/theme.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input()
  public searchFilter: string;

  @Input()
  public regionFilter: string;

  @Output()
  public searchFilterEmitter: EventEmitter<string> = new EventEmitter();

  @Output()
  public regionFilterEmitter: EventEmitter<string> = new EventEmitter();

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

  public onSearchChange(searchValue: string): void {
    this.searchFilter = searchValue;

    this.searchFilterEmitter.emit(searchValue);
  }

  public onRegionClick(regionValue: string): void {
    this.regionFilter = regionValue;

    this.regionFilterEmitter.emit(regionValue);
  }

  private getMode$(): Observable<Theme> {
    return this.mode$ = this.themeService.mode$;
  }

}
