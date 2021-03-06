import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewShoppingListComponent } from './shopping/view-shopping-list/view-shopping-list.component';
import { EditShoppingListComponent } from './shopping/edit-shopping-list/edit-shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ToggleDropdownDirective } from '../libs/directive/dropdown.directive';
import { ShoppingListService } from '../libs/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../libs/services/recipe.service';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping/store/reducers/shopping-list.reducers';
import { Toggle01Component } from './toggle/toggle01/toggle01.component';
import { SwitchComponent } from './switch-component/switch-component';
import { ToggleComponent } from './toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewShoppingListComponent,
    EditShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    ToggleDropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent,
    Toggle01Component ,
    SwitchComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer})
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
