import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useRecipesMeals from './useRecipesMeals'

export function useRecipes() {
  const navigate = useNavigate()
  const { origin } = useParams()
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState('')

  const searchType = searchParams.get('t') || 'name'
  const query = searchParams.get('q') || ''

  const { recipes, loading, hasNext, totalPage } = useRecipesMeals(searchType, query, origin, page)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedKeyword = keyword.trim()
    if (!trimmedKeyword) return

    navigate(`/${origin}/results?q=${encodeURIComponent(trimmedKeyword)}`)
  }

  useEffect(() => {
    setPage(1)
  }, [searchType, query, origin])

  return {
    recipes,
    loading,
    hasNext,
    totalPage,
    page,
    setPage,
    keyword,
    setKeyword,
    handleSubmit,
    navigate,
    searchType,
    query,
    origin
  }
}

export default useRecipes
