import {Recipe} from '../models/recipes.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelectedEventEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pancakes',
      'Breakfast',
      'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg'),
    new Recipe('Luttefisk',
      'Lunch',
      'https://i0.wp.com/zionbuffalo.org/wp-content/uploads/2015/03/Lute-web.jpg?resize=585%2C340&ssl=1'),
    new Recipe('Banana Split',
      'Dessert',
      'https://lulusrestaurant.com/wp-content/uploads/2017/06/banana-split.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

