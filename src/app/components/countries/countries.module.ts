import { NgModule } from '@angular/core';

import { CountriesComponent } from './countries.component';
import { CountryComponent } from './country/country.component';
import { DetailComponent } from './detail/detail.component';
import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from '@shared/pipes/filter/filter.pipe';
import { ClickPipe } from '@shared/pipes/click/click.pipe';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CountryRoutingModule } from './countries-routing.module';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent,
    DetailComponent,
    FilterComponent,
    FilterPipe,
    ClickPipe
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
