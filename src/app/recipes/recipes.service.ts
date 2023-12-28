import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    r1: Recipe = {
        title: "Elephant Ear Cookies",
        ingredients: "1 c Sugar|1 tb Molasses|1/2 c Shortening; melted|1 Egg|1/2 c Sour milk|1/4 ts Salt|1 ts Soda; dissolved in milk|2 1/2 c Flour|1 ts Cinnamon|1/4 ts Nutmeg|1 ts Vanilla|1 c Raisins (chopped)",
        servings: "36 Cookies",
        instructions: "Mix all ingredients in order given; drop by teaspoonfuls on greased cookie sheet. Bake 10 minutes in 375-degree oven."
    };

    r2: Recipe = {
        title: "Ella Zeek's Sugar Cookies",
        ingredients: "3 c All-purpose flour|1 1/2 c Brown sugar|1/2 c White sugar|1 c Shortening|1/4 c Milk|2 Eggs|2 ts Baking powder|1/2 ts Salt|1 ts Vanilla",
        servings: "48 Servings",
        instructions: "Cream sugars and shortening. Add milk, vanilla and eggs and mix well. Stir in remaining ingredients and mix well. Refrigerate for about 1 hour. With floured hands roll teaspoonful of dough into a ball. Place on cookie sheet. With three fingres together, press ball flat, leaving ridges down the middle. Bake in 400øF oven for 9 to 12 minutes or until lightly gold. Ella was a neighbor who was ten years older than God when I was a child. She always had these in her cookie jar, and usually would bake a dozen every day since the dough keeps so well. It is one of my all time favorites and I have never tasted them anywhere else."
    };

    recipes: Recipe[] = [this.r1, this.r2];

    constructor(private http: HttpClient) {}

    getRecipes(){
        return this.recipes;
    }
}