import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/components/header/header.component';

import { CommonModule } from '@angular/common';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }