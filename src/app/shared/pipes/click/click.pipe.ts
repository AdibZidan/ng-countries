import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Pipe({
  name: 'click'
})
export class ClickPipe implements PipeTransform {

  public transform(countries: Country[], regionFilter: string): Country[] {
    if (countries) {
      return this.getFilteredCountriesFromClick(countries, regionFilter);
    } else {
      return countries;
    }
  }

  private getFilteredCountriesFromClick(countries: Country[], regionFilter: string): Country[] {
    return countries
      .filter(
        (unfilteredCountry: Country): boolean | Country => {
          if (regionFilter) {
            return unfilteredCountry.region.includes(regionFilter);
          } else {
            return unfilteredCountry;
          }
        }
      );
  }

}
