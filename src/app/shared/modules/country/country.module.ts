import { NgModule } from '@angular/core';

import { CountryComponent } from '../../../components/country/country.component';

import { CommonModule } from '@angular/common';
import { CountryRoutingModule } from './country-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    HttpClientModule
  ],
  exports: [CountryComponent]
})
export class CountryModule { }
