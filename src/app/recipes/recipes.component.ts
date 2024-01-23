import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  no_results: boolean = false;
  recipeInput: any = "";
  query: any = "";
  recipes: any = [];
  API_KEY: any = "";

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) {
    // Refresh route with each different parameter
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit(): void {
    // Subscribe to API key data
    this.recipesService.getKey().subscribe(data => {
      if(data){
        this.API_KEY = data;
      }
      
      // Get current query parameter for recipes route
      this.query = this.route.snapshot.paramMap.get('query');

      // Subscribe to recipes data
      if(this.query){
        this.recipesService.getRecipes(this.query, this.API_KEY).subscribe((data: any) => {
          if(data){
            this.no_results = false;
            this.recipes = data;
            for(let recipe of this.recipes){
              recipe.ingredients = recipe.ingredients.split("|");
              recipe.instructions = recipe.instructions.split(". ");
            }
          }
          
          // If data is empty, there are no valid results
          if(data.length === 0){
            this.no_results = true;
          }
        });
      }
    });
  }
  
  getRecipes(){
    // Recipes route navigates to itself with additional query parameter
    const navigationDetails: string[] = ['/recipes'];
    navigationDetails.push(this.recipeInput);
    this.router.navigate(navigationDetails);
  }

  goToRecipe(param: Recipe, index: number): void{
    this.recipesService.setRecipe(param); // Sends recipe that has been clicked to the service

    // Navigate to recipe route with query and recipe index parameters
    const navigationDetails: string[] = ['/recipe'];
    navigationDetails.push(this.query);
    navigationDetails.push(index.toString());
    this.router.navigate(navigationDetails);
  }

}
