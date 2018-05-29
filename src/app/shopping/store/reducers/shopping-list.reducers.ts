import * as ShoppingListActions from '../actions/shopping-list.actions';
import { Ingredient } from '../../../../libs/domain/ingredient.model';

export interface AppState {
  shoppingList: ShoppingListState
}

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: ShoppingListState = {
  ingredients: [
    { name: 'Rice', quantity: 500 },
    { name: 'tomato', quantity: 5 },
  ],
  editedIngredientIndex: -1,
  editedIngredient: null,
};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      console.log('Add Ingredient action called with payload', action.payload);
      const updatedState = { ...state, ingredients: [...state.ingredients, action.payload] };
      console.log('updatedState', updatedState);
      return updatedState; //{...state , ingredients: [...state.ingredients , action.payload]};
    case ShoppingListActions.ADD_INGREDIENTS :
      console.log("inside add ingredients action" , action.payload);
      const updatedIngredientsState ={ ...state, ingredients: [...state.ingredients, ...action.payload] };
      console.log("state after adding ingredients" , updatedIngredientsState);
      return updatedIngredientsState;
    case ShoppingListActions.UPDATE_INGREDIENT :
      const ingredient = state.ingredients[state.editedIngredientIndex];
      console.log("inside update ingredient action");
      console.log("ingredient to edit" , ingredient);
      const updatedIngredient = { ...ingredient, ...action.payload.ingredient };
      console.log("ingredient to edit after update" , updatedIngredient);
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      console.log("updatedIngredients in state" , updatedIngredients);
      return { ...state, ingredients: updatedIngredients, editedIngredientIndex: -1, editedIngredient: null };
    case ShoppingListActions.DELETE_INGREDIENT :
      const afterDeletingIngredient = [...state.ingredients];
      afterDeletingIngredient.splice(state.editedIngredientIndex, 1);
        console.log("Deleting index " , state.editedIngredientIndex);
        console.log("ingredients in state after deleting" , afterDeletingIngredient);
        const stateAfterDelete = { ...state, ingredients: afterDeletingIngredient, editedIngredientIndex: -1, editedIngredient: null };
        console.log("state after delete", stateAfterDelete);
      return stateAfterDelete;
    case ShoppingListActions.START_EDIT :
      console.log("start edit action called with payload" , action.payload);
      const editIngredient = { ...state.ingredients[action.payload] };
      const startEditStore = { ...state, editedIngredient: editIngredient, editedIngredientIndex: action.payload };
      console.log(startEditStore);
      return  startEditStore;
    case ShoppingListActions.STOP_EDIT :
      return { ...state, editedIngredient: null, editedIngredientIndex: -1 };
    default :
      return state;
  }


}
