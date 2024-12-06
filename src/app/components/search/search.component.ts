import { Component } from '@angular/core';
import { IRecipe } from '../../models/irecipe';
import { RecipeService } from '../../services/recipee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  query: string = '';
  results: IRecipe[] = [];

  constructor(private recipeService: RecipeService) {}

  search() {
    this.results = this.recipeService.searchRecipes(this.query);
  }

}
