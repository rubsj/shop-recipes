import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../../../libs/domain/recipe.model';
import { RecipeService } from '../../../../libs/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private recipeService: RecipeService){

  }

  ngOnInit() {
  }

  chosenRecipe(){
     this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
