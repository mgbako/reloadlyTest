import { ADD_VISITED_COUNTRIES, CountryActions, LOAD_COUNTRIES, VISITED_COUNTRIES } from "./country.action";
import { CountryModel } from "./country.model";

export interface IState {
  countries: CountryModel[];
  visitedCountries: string[];
}
export interface IState2 {
  visitedCountries: string[];
}

const initialState: IState = {
  countries: [],
  visitedCountries: [],
}

export function countryReducer(state:IState = initialState, action: CountryActions):IState{
  switch(action.type){
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case VISITED_COUNTRIES:
      return {
        ...state,
      }
    case ADD_VISITED_COUNTRIES:
      return {

        ...state,
        visitedCountries: [...new Set([...state.visitedCountries, action.payload])]
      }
       
    default:
      return state
  }
}
/* export function visitedCountryReducer(state:IState = initialState, action: CountryActions):IState{
  switch(action.type){
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case VISITED_COUNTRIES:
      return {
        ...state,
      }
    case ADD_VISITED_COUNTRIES:
      return [...state.visitedCountries, action.payload]
       
    default:
      return state
  }
} */