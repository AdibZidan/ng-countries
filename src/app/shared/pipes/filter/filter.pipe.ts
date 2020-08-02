import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '@shared/interfaces/country.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(countries: Country[], searchFilter: string): Country[] {
    if (countries) {
      return this.getFilteredCountriesFromSearch(countries, searchFilter);
    } else {
      return countries;
    }
  }

  private getFilteredCountriesFromSearch(countries: Country[], searchFilter: string): Country[] {
    return countries
      .filter(
        (unfilteredCountry: Country): boolean | Country => {
          if (searchFilter) {
            return this.filteredCountries(unfilteredCountry, searchFilter);
          } else {
            return unfilteredCountry;
          }
        }
      );
  }

  private filteredCountries(unfilteredCountry: Country, searchFilter: string): boolean | Country {
    return unfilteredCountry
      .name
      .toLowerCase()
      .includes(
        searchFilter.toLowerCase()
      );
  }

}
