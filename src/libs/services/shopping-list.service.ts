import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../domain/ingredient.model';

@Injectable()
export class ShoppingListService{
 private  ingredients :Ingredient[] = [
    {name : 'Rice' , quantity : 500},
    {name: 'tomato', quantity: 5}];

 addIngredient(ingredient : Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientAdded.emit(this.ingredients.slice());
 }

  ingredientAdded = new EventEmitter<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients : Ingredient[]){
    /*ingredients.forEach(item =>{
      this.ingredients.push(item);
    })*/
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
