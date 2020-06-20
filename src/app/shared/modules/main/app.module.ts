import { NgModule } from '@angular/core';
import { AppComponent } from '../../../app.component';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
