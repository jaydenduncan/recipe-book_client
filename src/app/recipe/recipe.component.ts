import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  id: any;
  recipe: any;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipe = this.recipesService.getRecipe();
    this.recipe.servings = this.recipe.servings.split(" ")[0];
  }

}
