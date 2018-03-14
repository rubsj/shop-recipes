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
     this.ingredientsChanged.next(this.ingredients.slice());
 }

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index:number){
    return this.ingredients[index];
  }

  addIngredients(ingredients : Ingredient[]){
    /*ingredients.forEach(item =>{
      this.ingredients.push(item);
    })*/
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateingredient(index:number , ingredient:Ingredient){
    console.log("updating index" , index);
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  deleteIngredient(index:number){
    console.log("deleting index" , index );
    this.ingredients.slice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
