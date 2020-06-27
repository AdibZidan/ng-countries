import { TestBed } from '@angular/core/testing';
import { PropertyService } from './property.service';

describe('Property Service', () => {

  let propertyService: PropertyService;

  beforeEach(() => {
    propertyService = TestBed.inject(PropertyService);
  });

  it('Should be created', () => {
    expect(propertyService)
      .toBeTruthy();
  });

  it('Should have an initial isVisibleState$ property with the value of true', () => {
    propertyService.isVisibleState$
      .subscribe(
        (value: boolean): boolean =>
          expect(value)
            .toEqual(true)
      );
  });

  it('Should dynamically change state', () => {
    propertyService.setIsVisibleStateTo(false);

    propertyService.isVisibleState$
      .subscribe(
        (value: boolean): boolean =>
          expect(value)
            .toEqual(false)
      );
  });

});
