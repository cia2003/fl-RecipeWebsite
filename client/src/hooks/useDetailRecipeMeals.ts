import { useEffect, useState } from "react";
import { useMeals } from "./useMeals";
import type { DetailRecipeCard, MealCard } from "../types/meal.types";

export function useDetailRecipeMeals(id: string) {
    const [detailRecipe, setDetailRecipe] = useState<DetailRecipeCard[]>([])
    const [topFiveRelatedRecipe, setTopFiveRelatedRecipe] = useState<MealCard[]>([])
    const {
        getMealById, 
        getMealsByCategory,
        isLoading
    } = useMeals()

    useEffect(() => {
        let cancelled = false

        void getMealById(id).then((meal) => {
            if (!cancelled && meal) {
                setDetailRecipe(meal)
            }
        })

        return () => {
            cancelled = true
        }
    }, [setDetailRecipe])

    useEffect(() => {
        let cancelled = false
        
        if (detailRecipe[0]) {
            void getMealsByCategory(detailRecipe[0].category, 1, 6).then(
                (meal) => {
                    if (!cancelled && meal) {
                        setTopFiveRelatedRecipe(meal)

                    }
                }
            )            
        }

    }, [detailRecipe, getMealsByCategory])


    return {
        detailRecipe, 
        topFiveRelatedRecipe,
        isLoading
    }
}