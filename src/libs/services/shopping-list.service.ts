import { Injectable } from '@angular/core';
import { Ingredient } from '../domain/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService{
 private  ingredients :Ingredient[] = [
    {name : 'Rice' , quantity : 500},
    {name: 'tomato', quantity: 5}];

 addIngredient(ingredient : Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientAdded.next(this.ingredients.slice());
 }

  ingredientAdded = new Subject<Ingredient[]>();

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients : Ingredient[]){
    /*ingredients.forEach(item =>{
      this.ingredients.push(item);
    })*/
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
