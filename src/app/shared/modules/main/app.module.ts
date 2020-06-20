import { NgModule } from '@angular/core';
import { AppComponent } from '../../../app.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '../header/header.module';
import { CountryModule } from '../country/country.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeaderModule,
    CountryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
