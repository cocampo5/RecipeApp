import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
