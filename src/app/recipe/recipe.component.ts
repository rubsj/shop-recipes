import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../libs/domain/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {

   selectedRecipe : Recipe;

  constructor() { }

  ngOnInit() {
  }

  receivedRecipe(val : Recipe){
    this.selectedRecipe = val;
  }

}
