import type {
    CategoryCard,
    AlphabetGroup, 
    CountryCard,
    AreaCard,
    RecipeTotal
} from "../types/meal.types"

import { useState, useEffect, useMemo } from 'react'
import { useMeals } from "./useMeals";

function groupAlphabet(items: RecipeTotal[]): AlphabetGroup[] {
    const grouped: Record<string, RecipeTotal[]> = {}

    items.forEach((item) => {
        const firstLetter = item.name.charAt(0).toUpperCase()
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = []
        }
        grouped[firstLetter].push(item)
    })

    return Object.entries(grouped).map(([alphabet, recipes]) => ({ alphabet, recipes }))
}

export function useExploreMeals() {
    const PAGE_SIZE = 10
    const [page, setPage] = useState(0)

    const [chosenType, setChosenType] = useState('category')

    const [allBrowserableCategory, setAllBrowserableCategory] = useState<CategoryCard[]>([])
    const [country, setCountry] = useState<CountryCard[]>([])
    const [displayCountryWithTotal, setDisplayCountryWithTotal] = useState<RecipeTotal[]>([])

    const { 
        getListOfCategories, 
        getBrowserableListOfAreas,
        getTotalMealsByArea,
        isLoading
    } = useMeals()

    async function loadNextBatch<T extends { name: string }>(items: T[], functionName: (name: string) => Promise<number | null>): Promise<RecipeTotal[]> {
        const start = page * PAGE_SIZE
        const end = start + PAGE_SIZE

        const batch = items.slice(start, end)

        const result = await Promise.all(
            batch.map(async (item) => {
                const totalRecipes = (await functionName(item.name)) ?? 0
                const recipeTotal: RecipeTotal = {
                    name: item.name,
                    total: totalRecipes
                }
                return recipeTotal
            })
        )

        setDisplayCountryWithTotal(prev => [
            ...prev,
            ...result
        ])
        
        setPage(prev => prev + 1)
        return result
    }

    useEffect(() => {
        let cancelled = false

        void getListOfCategories(0, -1).then((ingredients) => {
            if (!cancelled && ingredients) {
                setAllBrowserableCategory(ingredients)
            } 
        })

        return () => {
            cancelled = true
        }

    }, [getListOfCategories])

    useEffect(() => {
        let cancelled = false

        void getBrowserableListOfAreas().then((areas) => {
            if (!cancelled && areas) {
                const toCountryCard = (area: AreaCard): CountryCard => ({
                    name: area.country
                })

                const result = areas.map(toCountryCard)
                setCountry(result)
            }
    })

        return () => {
            cancelled = true
        }

    }, [getBrowserableListOfAreas])

    useEffect(() => {
        let cancelled = false

        async function fetchData() {
            const totalRecipes = await loadNextBatch(country, getTotalMealsByArea)
            if (!cancelled) {
                setDisplayCountryWithTotal((prev) => [...prev, ...totalRecipes])
                setPage(prev => prev + 1)
            }
        }

        void fetchData()

        return () => {
            cancelled = true
        }
    }, [page, country, getTotalMealsByArea])

    const groupedAlphabet = useMemo(() => {
        const groupedRecipes = groupAlphabet(displayCountryWithTotal)
        const sortedGroupedRecipes: AlphabetGroup[] = groupedRecipes.sort((a, b) => a.alphabet.localeCompare(b.alphabet))

        return sortedGroupedRecipes
    }, [displayCountryWithTotal])

    return {
        allBrowserableCategory,
        groupedAlphabet,
        loadNextBatch,
        isLoading
    }
}
