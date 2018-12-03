import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../models/recipes.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onRecipeSelected() {
    this.recipeService.recipeSelectedEventEmitter.emit(this.recipe);
  }

}
