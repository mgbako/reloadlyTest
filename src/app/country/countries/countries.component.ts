import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadCountries } from '../country.action';
import { CountryModel } from '../country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  loader: boolean = false;
  countries: CountryModel[] = [];
  countriesMain: CountryModel[] = [];
  regions: any[] = [];
  selectedRegion:string = ''
  term:string = '';

  constructor(private countrService: CountryService, private store:Store<{LoadCountries:any}>, private router: Router) { }

  ngOnInit(): void {
    this.onGetCountries();
  }

  onGetCountries(){
    this.loader = true;
   this.countrService.getAllCountries()
    .pipe(finalize(() => this.loader = false))
    .subscribe(res => {
      this.countriesMain = res
      this.countries = this.countriesMain
      const data =  [...new Set(res.map((country:CountryModel) => country.region))];
      this.regions = data;
      this.store.dispatch(new LoadCountries(res))
      console.log("uniq", data)
    })
  }

  onSearch(event: any) {
    const term = event.target.value
    const data = this.countriesMain
    let result = data.filter((val: CountryModel) =>
      val.name.common.toLowerCase().includes(term)
    )

    this.countries = result
  }

  onFilter(event: any) {

    console.log(event.value);
    if(event.value){
      const term = event.value
      const data = this.countriesMain
      let result = data.filter((val: CountryModel) =>
        val.region === term
      )
  
      this.countries = result
    }else{
      this.countries = this.countriesMain;
    }
  }

  viewDetail(country:CountryModel){
    this.router.navigate(['/', country.name.common]);
  }
}
