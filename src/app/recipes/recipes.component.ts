import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  no_results: boolean = false;
  recipeInput: any;
  recipes: any;
  API_KEY: any;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.getKey().subscribe(data => this.API_KEY = data);
  }

  getRecipes(){
    this.recipesService.getRecipes(this.recipeInput, this.API_KEY).subscribe((data: any) => {
      if(data){
        this.no_results = false;
        this.recipes = data;
        for(let recipe of this.recipes){
          recipe.ingredients = recipe.ingredients.split("|");
          recipe.instructions = recipe.instructions.split(". ");
        }
      }
      
      if(data.length === 0){
        this.no_results = true;
      }
    });
  }

}
