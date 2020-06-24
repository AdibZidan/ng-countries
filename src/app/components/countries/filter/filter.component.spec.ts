import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';

describe('Filter Component', () => {

  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component)
      .toBeTruthy();
  });

  describe('Filter Component properties', () => {

    it('Should have an undefined mode$ property before initialization', () => {
      expect(component.mode$)
        .toBeUndefined();
    });

    it('Should have isVisible property with an initial of false before initialization', () => {
      expect(component.isVisible)
        .toEqual(false);
    });

    it('Should have an undefined filterRegions property before initialization', () => {
      expect(component.filterRegions)
        .toBeUndefined();
    });

    it('Should have defined mode$ poperty after initialization', () => {
      component.ngOnInit();

      expect(component.mode$)
        .toBeDefined();
    });

  });

  it('Should initialize filterRegions', () => {
    component.getFilterRegions();

    expect(component.filterRegions)
      .toBeDefined();

    expect(component.filterRegions)
      .toEqual([
        'Africa',
        'America',
        'Asia',
        'Europe',
        'Oceania'
      ]);
  });

  it('Should dynamically negate isVisible property', () => {
    component.onFilterRegionsClick();

    expect(component.isVisible)
      .toEqual(true);

    component.onFilterRegionsClick();

    expect(component.isVisible)
      .toEqual(false);
  });

});
