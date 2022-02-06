import { ActionReducerMap } from "@ngrx/store";
import * as fromCountries from '../country/country.reducer';

export interface IAppState {
  countries: fromCountries.IState
}

export const appReducer:ActionReducerMap<IAppState> = {
  countries: fromCountries.countryReducer
}