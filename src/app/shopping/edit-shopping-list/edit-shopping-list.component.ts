import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/actions/shopping-list.actions';
import { AppState } from '../store/reducers/shopping-list.reducers';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent implements OnInit, OnDestroy {


  addIngredientsForm: FormGroup;
  editingSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.addIngredientsForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'quantity': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });

    this.editingSubscription = this.store.select('shoppingList')
      .subscribe(data => {
        if (data.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItemIndex = data.editedIngredientIndex;
          this.editedIngredient = data.editedIngredient;
          this.addIngredientsForm.setValue({
            'name': this.editedIngredient.name,
            'quantity': this.editedIngredient.quantity,
          });
        } else {
          this.editMode = false;
        }
      });
  }

  updateIngredient() {
    let ingredientToAdd: Ingredient = { name: '', quantity: 0 };
    ingredientToAdd.name = this.addIngredientsForm.get('name').value;
    ingredientToAdd.quantity = this.addIngredientsForm.get('quantity').value;
    console.log(ingredientToAdd);
    console.log(this.editMode);
    if (this.editMode) {
      //this.shoppingListService.updateingredient(this.editedItemIndex , ingredientToAdd);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: ingredientToAdd }));

    } else {
      //this.shoppingListService.addIngredient(ingredientToAdd);
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredientToAdd));
    }
    this.editMode = false;
    this.addIngredientsForm.reset();
  }

  clearIngredient() {
    this.addIngredientsForm.reset();
    this.editMode = false;
  }


  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.editingSubscription.unsubscribe();
  }

  deleteIngredient() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.clearIngredient();
  }
}
