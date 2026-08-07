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

export interface BrowserableCategoryResponse {
  meals: BrowserableCategory[]
}

export interface BrowserableCategory {
  strCategory: string
}

export interface BrowserableCategoryCard {
  name: string
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

// template literal types
type IngredientKey = `strIngredient${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`
type MeasureKey = `strMeasure${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`

export interface DetailRecipe
  extends Record<IngredientKey, string | null>, 
  Record<MeasureKey, string | null> {
  idMeal: string
  strMeal: string
  strMealAlternate: string

  strCategory: string
  strArea: string
  strCountry: string

  strInstructions: string
  strMealThumb: string
  strTags: string | null;
  strYoutube: string;

  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface DetailRecipeIngredient {
  name: string
  measure?: string
}

export interface DetailRecipeCard {
  id: string
  name: string
  category: string
  area: string
  country: string

  thumbnail: string

  tags: string[]

  youtube: string
  instructions: string[]

  ingredients: DetailRecipeIngredient[]
}

export interface DetailRecipeResponse {
  meals: DetailRecipe[]
}

export interface AreaCard {
  name: string
  country: string
}

export interface Area {
  strArea: string
  strCountry: string
}

export interface Country {
  strCountry: string
}

export interface CountryCard {
  name: string
}

export interface AreasResponse {
  meals: Area[]
}

export interface RecipeTotal {
    name: string
    total: number
}

export interface AlphabetGroup {
    alphabet: string
    recipes: RecipeTotal[]
}

export type ExploreType = 'category' | 'area' | 'ingredient'

export interface AlphabetListProps {
    data: AlphabetGroup[]
    onLoadMore: () => void
    hasMore: boolean
    isLoading?: boolean
}
