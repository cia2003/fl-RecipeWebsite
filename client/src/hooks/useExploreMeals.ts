import type { ExploreType, MealCard } from "../types/meal.types"

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useMeals } from "./useMeals";


async function getListOfType(
    functionName: ((name: string) => Promise<any>) | ((startSlice: number, endSlice: number) => Promise<any>),
    selectedType: ExploreType,
    setListOfType: (item: any) => void
) {
    if (selectedType === 'ingredient') {
        void (functionName as (startSlice: number, endSlice: number) => Promise<any>)(0, -1).then((item) => {
            setListOfType((prev: any) => ({
                ...prev,
                [selectedType]: item.sort((a: any, b:any) => a.name.localeCompare(b.name))
            }))
        })
    } else {
        void (functionName as (name: string) => Promise<any>)('').then((item) => {
            setListOfType((prev: any) => ({
                ...prev,
                [selectedType]: item.sort((a: any, b:any) => a.name.localeCompare(b.name))
            }))
        })
    }
}

export function useExploreMeals(selectedType: ExploreType) {
    const [listOfType, setListOfType] = useState<Record<ExploreType, Array<{ name: string }>>>(
        {
            category: [],
            area: [],
            ingredient: []
        }
    )
    const [cardResult, setCardResult] = useState<MealCard[]>([])

    const {
        getBrowserableListOfCategories,
        getBrowserableListOfAreas,
        getBrowserableListOfMainIngredients,
        getMealsByCategory,
        getMealsByArea,
        getMealsByMainIngredient,
        isLoading
    } = useMeals()

    useEffect(() => {
        if (selectedType === 'category') {
            getListOfType(getBrowserableListOfCategories, selectedType, setListOfType)
        } else if (selectedType === 'area') {
            getListOfType(getBrowserableListOfAreas, selectedType, setListOfType)
        } else if (selectedType === 'ingredient') {
            getListOfType(getBrowserableListOfMainIngredients, selectedType, setListOfType)
        }
    }, [selectedType, getBrowserableListOfAreas, getBrowserableListOfCategories, getBrowserableListOfMainIngredients])

    const searchMeals = useCallback(async (searchValue: string) => {
        const trimmedValue = searchValue.trim()

        if (!trimmedValue) {
            setCardResult([])
            return
        }

        let meals: MealCard[] | null = []

        if (selectedType === 'category') {
            meals = await getMealsByCategory(trimmedValue, 0, 6)
        } else if (selectedType === 'area') {
            meals = await getMealsByArea(trimmedValue, 0, 6)
        } else if (selectedType === 'ingredient') {
            meals = await getMealsByMainIngredient(trimmedValue, 0, 6)
        }

        setCardResult(meals ?? [])
    }, [selectedType, getMealsByCategory, getMealsByArea, getMealsByMainIngredient])

    const memoizedListOfType = useMemo(() => listOfType, [
        listOfType.category,
        listOfType.area,
        listOfType.ingredient
    ])

    return {
        listOfType: memoizedListOfType,
        cardResult,
        searchMeals,
        isLoading
    }
}
