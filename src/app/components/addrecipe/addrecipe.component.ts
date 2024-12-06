import { Component, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../../models/irecipe';
import { RecipeService } from '../../services/recipee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addrecipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addrecipe.component.html',
  styleUrl: './addrecipe.component.css'
})
export class AddrecipeComponent {
  recipe: IRecipe = {
    id: '',
    name: '',
    ingredients: [],
    instructions: '',
    description: '',
    image: ''
  };

  ingredientsString: string = '';

  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.recipe.image = e.target.result; // Guardar la imagen como base64
      };
      reader.readAsDataURL(file);
    }
  }

  addRecipe() {
    this.recipe.ingredients = this.ingredientsString
      .split(',')
      .map(ingredient => ingredient.trim())
      .filter(ingredient => ingredient !== '');
      
    this.recipe.id = Date.now().toString();
    this.recipeService.addRecipe({...this.recipe});
    
    this.recipe = {
      id: '',
      name: '',
      ingredients: [],
      instructions: '',
      description: '',
      image: ''
    };
    this.ingredientsString = '';
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
