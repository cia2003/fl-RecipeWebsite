import { useEffect, useState } from "react";
import { useMeals } from "./useMeals";
import type { MealCard, CategoryCard, IngredientCard  } from "../types/meal.types";
import landmarks from "../data/landmark";


export function useHomeMeals() {
    const [randomMeals, setRandomMeals] = useState<MealCard[]>([])
    const [browserableIngredient, setBrowserableIngredient] = useState<IngredientCard[]>([])
    const [browserableCategory, setBrowserableCategory] = useState<CategoryCard[]>([])

    const { getRandomMeals,  getBrowserableListOfMainIngredients, getListOfCategories, isLoading } = useMeals()

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


    return {
        randomMeals, 
        browserableIngredient, 
        browserableCategory,
        isLoading
    }
}