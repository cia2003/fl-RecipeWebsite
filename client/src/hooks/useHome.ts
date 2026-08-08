import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHomeMeals } from './useHomeMeals'

export function useHome() {
  const [keyword, setKeyword] = useState('')
  const { randomMeals, singleRandomMeal, browserableCategory, browserableIngredient, isLoading } = useHomeMeals()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!keyword.trim()) return

    navigate(`/home/results?q=${keyword}`)
  }

  const goToDetail = (id: string | undefined) => {
    if (!id) return
    navigate(`/detail-recipe?id=${id}`)
  }

  const goToResults = (params: string) => navigate(params)

  return {
    keyword,
    setKeyword,
    randomMeals,
    singleRandomMeal,
    browserableCategory,
    browserableIngredient,
    isLoading,
    handleSubmit,
    goToDetail,
    goToResults
  }
}

export default useHome
