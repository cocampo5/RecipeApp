export class Recipe {
  public name: string;
  public description: string;
  public imgUrl: string;

  constructor (name: string, descr: string, imgUrl: string) {
    this.name = name;
    this.description = descr;
    this.imgUrl = imgUrl;
  }
}
