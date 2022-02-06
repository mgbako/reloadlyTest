import { CountryActions, LOAD_COUNTRIES } from "./country.action";
import { CountryModel } from "./country.model";

export interface IState {
  countries: CountryModel[];
}

const initialState: IState = {
  countries: [],
}
export function countryReducer(state:IState = initialState, action: CountryActions):IState{
  switch(action.type){
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return state
  }
}