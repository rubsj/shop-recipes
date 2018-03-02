import { Recipe } from '../domain/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

  private recipes: Recipe[] = [
    {
      id : 1,
      name: 'Chicken Kathi Roll',
      description: 'Roasted chicken wrapped  in a yummy roll',
      impagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
      ingredients : [{name: 'wheat-roll', quantity : 2}, {name : 'chicken' , quantity : 500 }]
    }
    ,
    {
      id : 2,
      name: 'Veg Biryani',
      description: 'Vegetabled and Rice cooked in aromatic flavour',
      impagePath: 'https://c1.staticflickr.com/6/5643/30102545481_54a2fdeeaa_b.jpg',
      ingredients : [{name: 'Rice', quantity : 500}, {name : 'vegetables' , quantity : 500 }]
    },
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id :number) :Recipe{
    return this.recipes.find((recipe : Recipe) => recipe.id === id);
  }
}
