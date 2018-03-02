import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../libs/domain/recipe.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../libs/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe : Recipe;
  constructor(private shoppingList: ShoppingListService, private route : ActivatedRoute , private recipeService :RecipeService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.selectedRecipe = this.recipeService.getRecipe(id);
    this.route.params.subscribe(params => {
      this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  sendIngredientsToshoppingList(){
      this.shoppingList.addIngredients(this.selectedRecipe.ingredients);
  }

}
