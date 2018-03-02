import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../../../libs/domain/recipe.model';
import { RecipeService } from '../../../../libs/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor( private router : Router, private route: ActivatedRoute,) {

  }

  ngOnInit() {
  }

  chosenRecipe(recipe: Recipe) {
    this.router.navigate([recipe.id], {relativeTo: this.route});
  }

}
