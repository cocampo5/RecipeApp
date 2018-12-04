import {Recipe} from '../models/recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelectedEventEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancakes',
      'Breakfast',
      'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg', [
        new Ingredient('Pancake dough', 1), new Ingredient('Eggs', 3), new Ingredient('Maple Syrup', 1)
      ]),
    new Recipe('Luttefisk',
      'Lunch',
      'https://i0.wp.com/zionbuffalo.org/wp-content/uploads/2015/03/Lute-web.jpg?resize=585%2C340&ssl=1', [
        new Ingredient('Cod', 1), new Ingredient('Beans', 1), new Ingredient('Mashed potatoes', 3)
      ]),
    new Recipe('Banana Split',
      'Dessert',
      'https://lulusrestaurant.com/wp-content/uploads/2017/06/banana-split.jpg', [
        new Ingredient('Banada', 2), new Ingredient('Strawberry Ice Cream', 1), new Ingredient('Vanilla Ice Cream', 1),
        new Ingredient('Chocolate Ice Cream', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

