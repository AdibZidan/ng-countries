import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { CountriesModule } from './components/countries/countries.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderModule,
    CountriesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }