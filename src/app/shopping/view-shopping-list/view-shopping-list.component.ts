///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { ShoppingListService } from '../../../libs/services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.css'],
})
export class ViewShoppingListComponent implements OnInit , OnDestroy{

  ingredients :Ingredient[];
  subscription:Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription= this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) =>{
       this.ingredients= ingredients;
    });
    this.ingredients= this.shoppingListService.getIngredients();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(idx : number){
    console.log("started editing index" , idx);
    this.shoppingListService.startedEditing.next(idx);
  }

}
