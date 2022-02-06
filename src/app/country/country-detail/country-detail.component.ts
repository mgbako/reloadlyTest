import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, first, map, pluck, reduce, tap } from 'rxjs';
import { CountryModel } from '../country.model';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country: CountryModel;

  constructor(private acRoute: ActivatedRoute, private  countryService:  CountryService) { }

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
      console.log(this.country)
    });
  }
}
