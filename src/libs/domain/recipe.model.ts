import { Ingredient } from './ingredient.model';

export interface Recipe{
  name:string;
  description:string;
  impagePath:string;
  ingredients : Ingredient[];
}
