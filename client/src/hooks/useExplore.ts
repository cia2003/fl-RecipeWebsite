import { useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type { ExploreType } from '../types/meal.types'
import { useExploreMeals } from './useExploreMeals'

export function useExplore() {
  const [searchParams] = useSearchParams()
  const [chosenType, setChosenType] = useState<ExploreType>('category')
  const [searchValue, setSearchValue] = useState('')
  const [hasSearched, setHasSearched] = useState(false)
  const [filterText, setFilterText] = useState('')
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()
  const searchType = searchParams.get('t') || 'category'

  const { listOfType, cardResult, searchMeals, isLoading } = useExploreMeals(chosenType)

  const handleSelectItem = (itemName: string) => {
    setSearchValue(itemName)
    setHasSearched(true)
    void searchMeals(itemName)
  }

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value)
  }

  const filteredItems = ((listOfType[chosenType] as { name: string }[]) ?? []).filter((item) => {
    const query = filterText.trim().toLowerCase()

    if (!query) return true

    return item.name.toLowerCase().includes(query)
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedKeyword = keyword.trim()
    if (!trimmedKeyword) return

    navigate(`/explore/results?q=${encodeURIComponent(trimmedKeyword)}`)
  }

  useEffect(() => {
    setChosenType(searchType as ExploreType)
  }, [searchType])

  const goToDetail = (id: string) => navigate(`/detail-recipe?id=${id}`)
  const goToResults = (path: string) => navigate(path)

  return {
    chosenType,
    setChosenType,
    searchValue,
    setSearchValue,
    hasSearched,
    filterText,
    setFilterText,
    keyword,
    setKeyword,
    listOfType,
    cardResult,
    isLoading,
    filteredItems,
    handleSelectItem,
    handleFilterChange,
    handleSubmit,
    goToDetail,
    goToResults
  }
}

export default useExplore
