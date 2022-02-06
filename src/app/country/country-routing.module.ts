import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./countries/countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";

const routes: Routes = [
  {path: '', component: CountriesComponent, data: {title: 'Countries'}},
  {path: ':countryId', component: CountryDetailComponent, data: {title: 'Countries'}}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule{}