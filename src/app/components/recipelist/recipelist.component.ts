import { Component, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../services/recipee.service';
import { IRecipe } from '../../models/irecipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipelist.component.html'
})
export class RecipelistComponent {
  recipes: IRecipe[] = [];
  selectedRecipe: IRecipe | null = null;
  @Output() recipeSelected = new EventEmitter<any>();

  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  selectRecipe(recipe: IRecipe) {
    this.selectedRecipe = recipe;
    this.recipeSelected.emit(recipe);
  }

  closeDetails() {
    this.selectedRecipe = null;
  }
}
