import { CountriesComponent } from './countries.component';
import { DetailComponent } from './detail/detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':country',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
