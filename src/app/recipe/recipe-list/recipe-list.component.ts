import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../libs/domain/recipe.model';
import { RecipeService } from '../../../libs/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
