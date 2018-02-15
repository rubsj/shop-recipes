import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../libs/domain/recipe.model';
import { RecipeService } from '../../libs/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [RecipeService]
})
export class RecipeComponent implements OnInit {

   selectedRecipe : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe:Recipe) => {
      this.selectedRecipe = recipe;
    })
  }



}
