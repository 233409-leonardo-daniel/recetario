import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipee.service';
import { IRecipe } from '../../models/irecipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  query: string = '';
  results: IRecipe[] = [];
  showResults: boolean = false;
  suggestions: string[] = [];
  showSuggestions: boolean = false;

  constructor(private recipeService: RecipeService) {}

  search() {
    if (this.query.trim()) {
      this.results = this.recipeService.searchRecipes(this.query);
      this.showResults = true;
    }
  }

  onInput() {
    if (this.query.trim()) {
      this.suggestions = this.recipeService.getAllIngredients()
        .filter(ingredient => 
          ingredient.toLowerCase().includes(this.query.toLowerCase())
        );
      this.showSuggestions = true;
    } else {
      this.suggestions = [];
      this.showSuggestions = false;
    }
  }

  selectSuggestion(suggestion: string) {
    this.query = suggestion;
    this.showSuggestions = false;
    this.search();
  }

  closeResults() {
    this.showResults = false;
    this.results = [];
  }

  closeSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }
}
