import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/recipes.model';
import {ShoppingListService} from '../../shopping-list/shopping-edit/services/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  currentRecipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private slService: ShoppingListService, private route: ActivatedRoute) {
  }

  onAddToList() {
    this.slService.addIngredientsBulk(this.currentRecipe.ingredients);
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.currentRecipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
}
