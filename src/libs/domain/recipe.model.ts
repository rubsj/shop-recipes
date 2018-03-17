import { Ingredient } from './ingredient.model';

export interface Recipe{
  id? : number;
  name:string;
  description:string;
  impagePath:string;
  ingredients ?: Ingredient[];
}
