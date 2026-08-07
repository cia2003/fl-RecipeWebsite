import { useEffect, useState } from "react";
import { useMeals } from "./useMeals";
import type { MealCard, CategoryCard, IngredientCard, RecipeTotal, AlphabetGroup  } from "../types/meal.types"


export function useHomeMeals() {
    const [randomMeals, setRandomMeals] = useState<MealCard[]>([])
    const [singleRandomMeal, setSingleRandomMeal] = useState<MealCard[]>([])
    const [browserableIngredient, setBrowserableIngredient] = useState<IngredientCard[]>([])
    const [browserableCategory, setBrowserableCategory] = useState<CategoryCard[]>([])

    const { 
        getRandomMeals,  
        getListOfCategories, 
        getBrowserableListOfMainIngredients,
        isLoading
    } = useMeals()

    useEffect(() => {
        let cancelled = false

        void getRandomMeals(5).then((meals) => {
        if (!cancelled && meals) {
            setRandomMeals(meals)
        }
        })

        return () => {
        cancelled = true
        }
    }, [getRandomMeals])

    useEffect(() => {
        let cancelled = false

        void getListOfCategories(0, 5).then((categories) => {
            if (!cancelled && categories) {
                setBrowserableCategory(categories)
            }
        })

        return () => {
            cancelled = true
        }
    }, [getListOfCategories])

    useEffect(() => {
        let cancelled = false

        void getBrowserableListOfMainIngredients(0, 5).then((ingredients) => {
            if (!cancelled && ingredients) {
                setBrowserableIngredient(ingredients)
            }
        })

        return () => {
            cancelled = true
        }
    }, [getBrowserableListOfMainIngredients])

    useEffect(() => {
        let cancelled = false

        void getRandomMeals(1).then((meal) => {
            if (!cancelled && meal) {
                setSingleRandomMeal(meal)
            }
        })

        return () => {
            cancelled
        }
    }, [getRandomMeals])

    return {
        randomMeals, 
        browserableIngredient, 
        browserableCategory,
        singleRandomMeal,
        isLoading
    }
}
