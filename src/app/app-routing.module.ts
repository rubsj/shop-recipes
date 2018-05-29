import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { Toggle01Component } from './toggle/toggle01/toggle01.component';
import { ToggleComponent } from './toggle/toggle.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path:'toggle', component: ToggleComponent},
  { path: 'shopping', component: ShoppingComponent },
  { path: 'recipes', component: RecipeComponent , children: [
      {path: 'new' , component:RecipeEditComponent},
      {path : ':id' , component : RecipeDetailComponent },
      {path: ':id/edit' , component:RecipeEditComponent},
      {path : '' , component: RecipeStartComponent , pathMatch : 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
