import { CountriesComponent } from '../../../components/countries/countries.component';
import { DetailComponent } from '../../../components/countries/detail/detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: ':country', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
