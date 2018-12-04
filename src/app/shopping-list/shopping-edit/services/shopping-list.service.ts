import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [new Ingredient('Eggs', 10), new Ingredient('Flour', 1)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(i: Ingredient) {
    this.ingredients.push(i);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredientsBulk(i: Ingredient[]) {
    this.ingredients.push(...i);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
