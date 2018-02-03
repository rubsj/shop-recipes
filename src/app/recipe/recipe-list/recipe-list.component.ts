import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../libs/domain/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      name: 'Chicken Kathi Roll',
      description: 'Roasted chicken wrapped  in a yummy roll',
      impagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg',
    }
    ,
    {
      name: 'Veg Biryani',
      description: 'Vegetabled and Rice cooked in aromatic flavour',
      impagePath: 'https://c1.staticflickr.com/6/5643/30102545481_54a2fdeeaa_b.jpg',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  @Output() selRecipe = new EventEmitter<Recipe>();

  emittedRecipe(chosenRecipe : Recipe){
    this.selRecipe.emit(chosenRecipe);
  }

}
