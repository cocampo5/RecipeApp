import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../models/recipes.model';
import {ShoppingListService} from '../../shopping-list/shopping-edit/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  @Input() currentRecipe: Recipe;

  constructor(private slService: ShoppingListService) {
  }

  onAddToList() {
    this.slService.addIngredientsBulk(this.currentRecipe.ingredients);
  }

  ngOnInit() {
  }
}
