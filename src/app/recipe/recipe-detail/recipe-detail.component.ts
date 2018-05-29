import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../libs/domain/recipe.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../libs/services/recipe.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../shopping/store/reducers/shopping-list.reducers';
import * as ShoppingListActions from '../../shopping/store/actions/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(
    private shoppingList: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private store:Store<AppState>
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.selectedRecipe = this.recipeService.getRecipe(id);
    this.route.params.subscribe(params => {
      this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  sendIngredientsToshoppingList() {
    console.log('sendIngredientsToshoppingList', this.selectedRecipe);
   // this.shoppingList.addIngredients(this.selectedRecipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.selectedRecipe.ingredients));
  }

  onDelete() {
    console.log('On delete called for ', this.selectedRecipe);
    this.recipeService.deleteRecipe(this.selectedRecipe.id);
    this.router.navigate(['recipes']);
  }

}
