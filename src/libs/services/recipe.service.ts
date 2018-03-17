import { Recipe } from '../domain/recipe.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  lastIdUsed = 2;

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Chicken Kathi Roll',
      description: 'Roasted chicken wrapped  in a yummy roll',
      impagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
      ingredients: [{ name: 'wheat-roll', quantity: 2 }, { name: 'chicken', quantity: 500 }],
    }
    ,
    {
      id: 2,
      name: 'Veg Biryani',
      description: 'Vegetabled and Rice cooked in aromatic flavour',
      impagePath: 'https://c1.staticflickr.com/6/5643/30102545481_54a2fdeeaa_b.jpg',
      ingredients: [{ name: 'Rice', quantity: 500 }, { name: 'vegetables', quantity: 500 }],
    },
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes.find((recipe: Recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    //get the last id and update recipe
    this.lastIdUsed = this.lastIdUsed + 1;
    const recipeToAdd = {id :this.lastIdUsed, ...recipe };
    this.recipes.push(recipeToAdd);
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const indexOfRecipeToUpdate =  this.recipes.findIndex((recipe:Recipe)=>id===recipe.id);
    const recipeToUpdate =  {id :id, ...newRecipe };
    console.log("recipeToUpdate" ,recipeToUpdate);
    this.recipes[indexOfRecipeToUpdate] = recipeToUpdate;
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }

  deleteRecipe(id: number) {
    const indexOfRecipeToUpdate =  this.recipes.findIndex((recipe:Recipe)=>id===recipe.id);
    this.recipes.splice(indexOfRecipeToUpdate, 1);
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }
}
