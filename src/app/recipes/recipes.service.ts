import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor(private http: HttpClient) {}

    getKey(): Observable<string>{
        return this.http.get("http://localhost:3000/", {responseType: 'text'});
    }

    getRecipes(recipe: string, api_key: string): Observable<Recipe[]>{
        return this.http.get<Recipe[]>(`https://api.api-ninjas.com/v1/recipe?query=${recipe}`, {headers: {
            'X-Api-Key': api_key
        }});
    }
}