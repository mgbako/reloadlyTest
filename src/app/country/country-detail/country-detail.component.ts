import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { filter, first, map, pluck, reduce, tap } from 'rxjs';
import { AddVisitedCountries, VisitedCountries } from '../country.action';
import { CountryModel } from '../country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country: CountryModel;

  constructor(private acRoute: ActivatedRoute, private toastr:ToastrService, private  countryService:  CountryService, private store:Store<{VisitedCountries}>) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe((param:any) => {
      const countryId = param['countryId'];
    
      countryId ? this.onGetCountry(countryId) : '';

    });
  }

  onGetCountry(name:string){
    this.countryService.getCountry(name).pipe(
     
    ).subscribe((res:any) => {
     
        this.country = res[0];
        let country:string[] = [];
        country.push(this.country.name.common)
        this.store.dispatch(new AddVisitedCountries(this.country.name.common))
        console.log(this.country);
      
    }, error => {
      this.toastr.warning('Not found', 'Country');
    });
  }
}
