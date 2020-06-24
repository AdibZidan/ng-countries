import { NgModule } from '@angular/core';

import { CountriesComponent } from '../../../components/countries/countries.component';
import { CountryComponent } from '../../../components/countries/country/country.component';
import { DetailComponent } from '../../../components/countries/detail/detail.component';
import { FilterComponent } from '../../../components/countries/filter/filter.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountryRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent,
    DetailComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CountryRoutingModule
  ],
  exports: [
    CountriesComponent,
    CountryRoutingModule
  ]
})
export class CountriesModule { }
