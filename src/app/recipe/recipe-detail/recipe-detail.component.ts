import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../libs/domain/recipe.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe : Recipe;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  sendIngredientsToshoppingList(){
      this.shoppingList.addIngredients(this.selectedRecipe.ingredients);
  }

}
