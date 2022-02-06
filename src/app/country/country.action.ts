import {Action } from '@ngrx/store';
import { CountryModel } from './country.model';

export const LOAD_COUNTRIES = '[LOAD_COUNTRIES] LIST OF COUNTRIES';
export const VISITED_COUNTRIES = '[VISITED_COUNTRIES] VISITED COUNTRIES';
export const ADD_VISITED_COUNTRIES = '[ADD_VISITED_COUNTRIES] ADD VISITED COUNTRIES';

export class LoadCountries implements Action {
  readonly type = LOAD_COUNTRIES;

  constructor(public payload: CountryModel[]) {}
}

export class VisitedCountries implements Action {
  readonly type = VISITED_COUNTRIES;
}
export class AddVisitedCountries implements Action {
  readonly type = ADD_VISITED_COUNTRIES;

  constructor(public payload: string){}
}

export type CountryActions = | LoadCountries | VisitedCountries | AddVisitedCountries;