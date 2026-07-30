import { useCallback, useState } from "react";
import type {
  CategoriesResponse,
  Category,
  CategoryCard,
  Ingredient,
  IngredientCard,
  IngredientsResponse,
  Meal,
  MealCard,
  MealsResponse,
} from "../types/meal.types";
import {
  lookupSingleRandomMeal,
  filterByCategory,
  listAllMealCategories, 
  filterByMainIngredient, 
  filterByArea, 
  getBrowseableListForCategory, 
  getBrowseableListForIngredient
} from '../services/mealService'



export function useMeals() {
    const [isLoading, setIsLoading] = useState(false)
    const runMealRequest = useCallback(async <T,>(request: () => Promise<T>): Promise<T | null> => {
        setIsLoading(true)

        try {
            return await request()
        } catch (error) {
            console.error('Unable to load meal data from the Home page:', error)
            return null
        } finally {
            setIsLoading(false)
        }
    }, [])

    // useMeals.ts
    const getRandomMeals = useCallback((numData: number) => {
    return runMealRequest(async () => {
        const meals: MealCard[] = []
        const ids = new Set<string>()

        while (meals.length < numData) {
        const response = await lookupSingleRandomMeal()
        const meal = response.meals[0]

        if (!ids.has(meal.idMeal)) {
            ids.add(meal.idMeal)
            meals.push({
            id: meal.idMeal,
            title: meal.strMeal,
            img: meal.strMealThumb,
            category: meal.strCategory, 
            country: meal.strCountry
            })
        }
        }

        return meals
    })
    }, [runMealRequest])

    const getMealsByCategory = useCallback(
        (category: string, startSlice: number, endSlice: number) => {
    return runMealRequest(async () => {
            const response = await filterByCategory(category) as MealsResponse
            const toMealCard = (meal: Meal): MealCard => ({
                id: meal.idMeal,
                title: meal.strMeal,
                img: meal.strMealThumb,
                category: meal.strCategory, 
                country: meal.strCountry
            })
            const meals =  response.meals
                .slice(startSlice, endSlice)
                .map((toMealCard))
            
            return meals
            })
        }, 
        [runMealRequest]
    )

    const getListOfCategories = useCallback ((startSlice: number, endSlice:number) => {
        return runMealRequest(async () => {
            const response = await listAllMealCategories() as CategoriesResponse
            const toCategoryCard = (category: Category): CategoryCard => ({
                id: category.idCategory,
                name: category.strCategory,
                img: category.strCategoryThumb,
                description: category.strCategoryDescription
            })
            const categories = response.categories.slice(startSlice, endSlice).map((toCategoryCard))

            return categories

        })
    }, [runMealRequest]
    )

    const getBrowserableListOfCategories = useCallback (() => {
        return runMealRequest(async () => {
            const response = await getBrowseableListForCategory() as CategoriesResponse
            const toCategoryCard = (category: Category): CategoryCard => ({
                id: category.idCategory,
                name: category.strCategory,
                img: category.strCategoryThumb,
                description: category.strCategoryDescription
            })
            const categories = response.categories.map((toCategoryCard))

            return categories

        })
    }, [runMealRequest]
    )


    const getBrowserableListOfMainIngredients = useCallback ((startSlice: number, endSlice: number) => {
        return runMealRequest(async () => {
            const response = await getBrowseableListForIngredient() as IngredientsResponse
            const toIngredientCard = (ingredient: Ingredient): IngredientCard => ({
                id: ingredient.idIngredient,
                name: ingredient.strIngredient,
                img: ingredient.strThumb,
                description: ingredient.strDescription
            })
            const ingredients = response.meals.slice(startSlice, endSlice).map((toIngredientCard))
            
            return ingredients

        })
    }, [runMealRequest]
    )
    
    const getMealsByArea = useCallback(
        (area: string, startSlice: number, endSlice: number) => {
    return runMealRequest(async () => {
            const response = await filterByArea(area) as MealsResponse
            const toMealCard = (meal: Meal): MealCard => ({
                id: meal.idMeal,
                title: meal.strMeal,
                img: meal.strMealThumb,
                category: meal.strCategory, 
                country: meal.strCountry
            })
            const meals =  response.meals
                .slice(startSlice, endSlice)
                .map((toMealCard))
            
            return meals
            })
        }, 
        [runMealRequest]
    )

    const getMealsByMainIngredient = useCallback(
        (mainIngredient: string, startSlice: number, endSlice: number) => {
    return runMealRequest(async () => {
            const response = await filterByMainIngredient(mainIngredient) as MealsResponse
            const toMealCard = (meal: Meal): MealCard => ({
                id: meal.idMeal,
                title: meal.strMeal,
                img: meal.strMealThumb,
                category: meal.strCategory, 
                country: meal.strCountry
            })
            const meals =  response.meals
                .slice(startSlice, endSlice)
                .map((toMealCard))
            
            return meals
            })
        }, 
        [runMealRequest]
    )

    return {
        getRandomMeals, 
        getMealsByCategory, 
        getListOfCategories,
        getBrowserableListOfMainIngredients,
        isLoading
    }
}
