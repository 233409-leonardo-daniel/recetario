import { Component } from '@angular/core';
import { RecipelistComponent } from '../../components/recipelist/recipelist.component';
import { AddrecipeComponent } from '../../components/addrecipe/addrecipe.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipelistComponent, AddrecipeComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedRecipe: any;
  showAddRecipe = false;

  selectRecipe(recipe: any) {
    this.selectedRecipe = recipe;
    this.showAddRecipe = false;
  }

  toggleAddRecipe() {
    this.showAddRecipe = !this.showAddRecipe;
    this.selectedRecipe = null;
  }
}
