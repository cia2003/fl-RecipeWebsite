import { useEffect, useState } from 'react'
import type { MealCard } from '../types/meal.types'
import { useMeals } from './useMeals'

export default function useRecipesMeals(searchType: string, query: string, origin: string | undefined, page: number) {
  const [allRecipes, setAllRecipes] = useState<MealCard[]>([])
  const [recipes, setRecipes] = useState<MealCard[]>([])
  const [loading, setLoading] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [totalPage, setTotalPage] = useState(1)
  const pageSize = 20

  const { getMealsByArea, getMealsByCategory, getMealsByMainIngredient, getMealByName } = useMeals()

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        if (!query || !searchType) {
          setAllRecipes([])
          setHasNext(false)
          setTotalPage(1)
          return
        }

        let allMeals: MealCard[] = []

        if (searchType === 'name') {
          allMeals = (await getMealByName(query)) || []
        }

        if (searchType === 'category') {
          allMeals = (await getMealsByCategory(query)) || []
        }

        if (searchType === 'ingredient') {
          allMeals = (await getMealsByMainIngredient(query)) || []
        }

        if (searchType === 'area' || searchType === 'country') {
          allMeals = (await getMealsByArea(query)) || []
        }

        setAllRecipes(allMeals)
        setTotalPage(Math.max(1, Math.ceil(allMeals.length / pageSize)))
      } catch (error) {
        setAllRecipes([])
        setTotalPage(1)
        setHasNext(false)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [searchType, query, origin])

  useEffect(() => {
    const startSlice = (page - 1) * pageSize
    const endSlice = page * pageSize
    const currentPageRecipes = allRecipes.slice(startSlice, endSlice)

    setRecipes(currentPageRecipes)
    setHasNext(page < totalPage)
  }, [allRecipes, page, totalPage])

  return { recipes, loading, hasNext, totalPage }
}
