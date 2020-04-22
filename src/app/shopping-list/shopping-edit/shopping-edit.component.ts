import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/models/ingredient.model';
import {ShoppingListService} from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngName = this.nameInputRef.nativeElement.value;
    const newIngAmount = this.amountInputRef.nativeElement.value;
    this.shoppingService.addIngredient(new Ingredient(newIngName, newIngAmount));
  }

}
