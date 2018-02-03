import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

  constructor() { }

  @ViewChild('nameInput') nameElement : ElementRef;
  @ViewChild('quantityInput') quantityElement : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  addIngredient(){
    let ingredientToAdd: Ingredient = {name : '' , quantity : 0};
    ingredientToAdd.name= this.nameElement.nativeElement.value;
    ingredientToAdd.quantity = this.quantityElement.nativeElement.value;
    console.log(ingredientToAdd);
    this.ingredientAdded.emit(ingredientToAdd);
  }

}
