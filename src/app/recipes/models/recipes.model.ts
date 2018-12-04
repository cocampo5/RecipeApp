import {Ingredient} from '../../shared/models/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgUrl: string;
  public ingredients: Ingredient[];

  constructor (name: string, descr: string, imgUrl: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = descr;
    this.imgUrl = imgUrl;
    this.ingredients = ingredients;
  }
}
