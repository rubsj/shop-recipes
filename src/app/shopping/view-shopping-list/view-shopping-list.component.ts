import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.css']
})
export class ViewShoppingListComponent implements OnInit {
   ingredients :Ingredient[] = [
     {name : 'Rice' , quantity : 500},
     {name: 'tomato', quantity: 5}]
  constructor() { }

  ngOnInit() {
  }

}
