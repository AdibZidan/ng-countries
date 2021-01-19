import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountriesModule } from './components/countries/countries.module';
import { HeaderModule } from './components/header/header.module';

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
