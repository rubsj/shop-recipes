import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css'],
})
export class EditShoppingListComponent implements OnInit, OnDestroy {


  addIngredientsForm: FormGroup;
  editingSubscription: Subscription;
  editMode =false;
  editedItemIndex :number;
  editedIngredient:Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  /* @ViewChild('nameInput') nameElement : ElementRef;
   @ViewChild('quantityInput') quantityElement : ElementRef;*/

  ngOnInit() {
    this.addIngredientsForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'quantity': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });

    this.editingSubscription = this.shoppingListService.startedEditing.subscribe((index: number)=>{
       this.editMode=true;
       this.editedItemIndex = index;
       this.editedIngredient = this.shoppingListService.getIngredient(index);
       this.addIngredientsForm.setValue({
         'name' : this.editedIngredient.name,
         'quantity':   this.editedIngredient.quantity
       })
    });
  }

  updateIngredient() {
    let ingredientToAdd: Ingredient = { name: '', quantity: 0 };
    /* ingredientToAdd.name= this.nameElement.nativeElement.value;
     ingredientToAdd.quantity = this.quantityElement.nativeElement.value;*/
    ingredientToAdd.name = this.addIngredientsForm.get('name').value;
    ingredientToAdd.quantity = this.addIngredientsForm.get('quantity').value;
    console.log(ingredientToAdd);
    console.log(this.editMode);
    if(this.editMode){
      this.shoppingListService.updateingredient(this.editedItemIndex , ingredientToAdd);

    }else{
      this.shoppingListService.addIngredient(ingredientToAdd);
    }
    this.editMode = false;
    this.addIngredientsForm.reset();
  }

  clearIngredient(){
    this.addIngredientsForm.reset();
    this.editMode = false;
  }


  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }

  deleteIngredient(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearIngredient();
  }
}
