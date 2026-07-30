export interface MealCard {
  id: string
  title: string
  img: string
  category: string
  country: string
}

export interface Meal {
    idMeal: string
    strMeal: string
    strMealThumb: string
    strCategory: string
    strCountry: string
}

export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface CategoryCard {
  id: string
  name: string
  img: string
  description: string
}

export interface Ingredient {
  idIngredient: string
  strIngredient: string
  strDescription: string
  strThumb: string
}

export interface IngredientCard {
  id: string
  name: string
  description: string
  img: string
}

export interface MealsResponse {
  meals: Meal[]
}

export interface CategoriesResponse {
  categories: Category[]
}

export interface IngredientsResponse {
  meals: Ingredient[]
}
