import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Theme } from '@shared/enums/theme.enum';
import { PropertyService } from '@shared/services/property/property.service';
import { FilterComponent } from './filter.component';

describe('Filter Component', () => {

  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let propertyService: PropertyService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    propertyService = TestBed.inject(PropertyService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Before initialization', () => {
    it('Should have a defined searchFilter property', () => {
      expect(component.searchFilter).toEqual('');
    });

    it('Should have a defined regionFilter property', () => {
      expect(component.regionFilter).toEqual('');
    });

    it('Should have defined searchFilterEmitter property', () => {
      expect(component.searchFilterEmitter).toBeDefined();
    });

    it('Should have defined regionFilterEmitter property', () => {
      expect(component.regionFilterEmitter).toBeDefined();
    });

    it('Should have an undefined mode$ property', () => {
      expect(component.mode$).toBeUndefined();
    });

    it('Should have a defined isVisible property', () => {
      expect(component.isVisible).toEqual(false);
    });

    it('Should have a defined filterRegions property', () => {
      expect(component.filterRegions).toEqual([]);
    });
  });

  describe('After initialization', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('Should have defined mode$ property after initialization', (doneFn: DoneFn) => {
      expect(component.mode$).toBeDefined();

      component.mode$.subscribe((theme: Theme): void => {
        expect(theme).toEqual('dark');
        doneFn();
      });
    });

    it('Should initialize filterRegions', () => {
      component.getFilterRegions();

      expect(component.filterRegions).toBeDefined();
      expect(component.filterRegions).toEqual(['Africa', 'America', 'Asia', 'Europe', 'Oceania']);
    });

    it('Should dynamically negate isVisible property', () => {
      component.onFilterRegionsClick();

      expect(component.isVisible).toEqual(true);

      component.onFilterRegionsClick();

      expect(component.isVisible).toEqual(false);
    });

    it('Should emit search changes', () => {
      spyOn(component.searchFilterEmitter, 'emit');
      spyOn(propertyService, 'setIsVisibleStateTo');

      component.onSearchChange('United States of America');

      expect(component.searchFilter).toEqual('United States of America');
      expect(component.searchFilterEmitter.emit).toHaveBeenCalledWith('United States of America');
      expect(propertyService.setIsVisibleStateTo).toHaveBeenCalledWith(false);
    });

    it('Should show more button when the search field is empty', () => {
      spyOn(propertyService, 'setIsVisibleStateTo');

      component.onSearchChange('');

      expect(propertyService.setIsVisibleStateTo).toHaveBeenCalledWith(true);
    });

    it('Should emit click changes', () => {
      spyOn(component.regionFilterEmitter, 'emit');

      component.onRegionClick('Asia');

      expect(component.regionFilter).toEqual('Asia');
      expect(component.regionFilterEmitter.emit).toHaveBeenCalledWith('Asia');
    });
  });

});
