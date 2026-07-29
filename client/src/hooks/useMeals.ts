import { useCallback, useState } from "react";
import type {
  CategoriesResponse,
  Category,
  CategoryDetail,
  Meal,
  MealCard,
  MealsResponse,
} from "../types/meal.types";
import {
  lookupSingleRandomMeal,
  filterByCategory,
  listAllMealCategories
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
    const getFourRandomMeals = useCallback(() => {
    return runMealRequest(async () => {
        const meals: MealCard[] = []
        const ids = new Set<string>()

        while (meals.length < 4) {
        const response = await lookupSingleRandomMeal()
        const meal = response.meals[0]

        if (!ids.has(meal.idMeal)) {
            ids.add(meal.idMeal)
            meals.push({
            id: meal.idMeal,
            title: meal.strMeal,
            img: meal.strMealThumb,
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
                img: meal.strMealThumb
            })
            const meals =  response.meals
                .slice(startSlice, endSlice)
                .map((toMealCard))
            
            return meals
            })
        }, 
        [runMealRequest]
    )

    const getListOfCategories = useCallback (() => {
        return runMealRequest(async () => {
            const response = await listAllMealCategories() as CategoriesResponse
            const toCategoryDetail = (category: Category): CategoryDetail => ({
                id: category.idCategory,
                name: category.strCategory,
                img: category.strCategoryThumb,
                description: category.strCategoryDescription
            })
            const categories = response.categories.map((toCategoryDetail))

            return categories

        })
    }, [runMealRequest]
    )

    return {
        getFourRandomMeals, 
        getMealsByCategory, 
        getListOfCategories,
        isLoading
    }
}
