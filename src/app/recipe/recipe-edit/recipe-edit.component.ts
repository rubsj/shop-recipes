import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../../libs/services/recipe.service';
import { Recipe } from '../../../libs/domain/recipe.model';
import { Ingredient } from '../../../libs/domain/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  canEdit = false;
  recipeFormGroup: FormGroup;
  recipeToEdit: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.canEdit = param['id'] != null;
      this.initForm();
    });

    console.log('this.canEdit', this.canEdit);


  }

  private initForm() {
    let recipeName = '';
    let description = '';
    let recipeImagePath = '';
    let ingredients = new FormArray([]);
    if (this.canEdit) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      description = recipe.description;
      recipeImagePath = recipe.impagePath;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'quantity': new FormControl(ingredient.quantity, [Validators.required, Validators.pattern('^[0-9]*$')]),
          }));
        }
      }
    }
    this.recipeFormGroup = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'impagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredients,
    });
  }

  get ingredientControls() {
    return (
      <FormArray>this.recipeFormGroup.get('ingredients')
    ).controls;
  }

  onSubmit() {
    if (this.canEdit) {
      this.recipeService.updateRecipe(this.id, this.recipeFormGroup.value);
    } else {
      this.recipeService.addRecipe(this.recipeFormGroup.value);
    }
    this.recipeFormGroup.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.recipeFormGroup.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (
      <FormArray>this.recipeFormGroup.get('ingredients')
    ).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    }));
  }

  onRemoveIngredient(index: number) {
    (
      <FormArray>this.recipeFormGroup.get('ingredients')
    ).removeAt(index);

  }

}
