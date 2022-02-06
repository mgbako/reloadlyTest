import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../core/base.service';

const routes = {
  countries: '/v3.1/all',
  country: '/v3.1/name',
}

@Injectable({
  providedIn: 'root'
})
export class CountryService extends BaseService<any> {

  constructor(public httpClient:HttpClient) {
    super(httpClient)
   }

  getAllCountries(){
    return this.sendGet(`${routes.countries}`);
  }
  getCountry(name:string){
    return this.sendGet(`${routes.country}/${name}`);
  }
}
