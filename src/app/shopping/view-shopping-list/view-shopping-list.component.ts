import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../libs/domain/ingredient.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers/shopping-list.reducers';
import * as ShoppingListActions from '../store/actions/shopping-list.actions';
import {Observable} from "rxjs";

@Component({
  selector: 'app-view-shopping-list',
  templateUrl: './view-shopping-list.component.html',
  styleUrls: ['./view-shopping-list.component.css'],
})
export class ViewShoppingListComponent implements OnInit {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(idx: number) {
    console.log('started editing index', idx);
 //   this.shoppingListService.startedEditing.next(idx);
    this.store.dispatch(new ShoppingListActions.StartEdit(idx));
  }

}
