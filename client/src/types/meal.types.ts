export interface MealCard {
  id: string
  title: string
  img: string
}

export interface Meal {
    idMeal: string
    strMeal: string
    strMealThumb: string
}

export interface Category {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}

export interface CategoryDetail {
  id: string
  name: string
  img: string
  description: string
}

export interface MealsResponse {
  meals: Meal[]
}

export interface CategoriesResponse {
  categories: Category[]
}
