import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/models/ingredient.model';
import {ShoppingListService} from './shopping-edit/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (i: Ingredient[]) => {
        this.ingredients = i;
      }
    );
  }
}
