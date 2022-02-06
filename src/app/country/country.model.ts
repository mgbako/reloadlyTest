export interface CountryModel {
  altSpellings: string[];
  area: number;
  capital: string[];
  cca2: string;
  cca3: string;
  ccn3: string;
  fifa: string;
  population:number;
  region:string;
  startOfWeek: string;
  status: string;
  subregion:string;
  flags: FlagModel;
  name:  Name;
  unMember: boolean;  
}

interface FlagModel {
  svg: string;
  png:string;
}

interface Name {
  common: string; official:string;
}