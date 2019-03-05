import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
            new Recipe('A Test Recipe', 'This is simply a test', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg', 
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 2)]),
            new Recipe('Other Recipe', 'another test', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg', 
            [new Ingredient('Buns', 2), new Ingredient('Lettuce', 3)])
          ];

    constructor(private slService: ShoppingListService) {}

    public getRecipes() {
        return this.recipes.slice(); //slice get a copy
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
