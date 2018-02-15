///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, DoCheck, OnInit } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.css'],
})
export class ViewShoppingListComponent implements OnInit {

  ingredients :Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) =>{
      console.log("event subscriber called");
      this.ingredients= ingredients;
    });
    this.ingredients= this.shoppingListService.getIngredients();
  }

}
