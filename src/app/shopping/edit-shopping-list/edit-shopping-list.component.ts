import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  @ViewChild('nameInput') nameElement : ElementRef;
  @ViewChild('quantityInput') quantityElement : ElementRef;

  ngOnInit() {
  }

  addIngredient(){
    let ingredientToAdd: Ingredient = {name : '' , quantity : 0};
    ingredientToAdd.name= this.nameElement.nativeElement.value;
    ingredientToAdd.quantity = this.quantityElement.nativeElement.value;
    console.log(ingredientToAdd);
    this.shoppingListService.addIngredient(ingredientToAdd);
  }

}
