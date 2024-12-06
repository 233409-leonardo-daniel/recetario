import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IRecipe } from '../models/irecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: IRecipe[] = [];
  private recipesSubject = new BehaviorSubject<IRecipe[]>(this.recipes);

  getRecipes() {
    return this.recipesSubject.asObservable();
  }

  addRecipe(recipe: IRecipe) {
    this.recipes.push(recipe);
    this.recipesSubject.next(this.recipes);
  }

  searchRecipes(query: string) {
    if (!query) return [];
    query = query.toLowerCase();
    return this.recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(query)
      )
    );
  }

  getAllIngredients(): string[] {
    const ingredientSet = new Set<string>();
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        ingredientSet.add(ingredient.toLowerCase().trim());
      });
    });
    return Array.from(ingredientSet);
  }

  constructor() { }
}
