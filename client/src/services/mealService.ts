import { appConfig } from '../config/appConfig'

const URL = appConfig.appURL

const searchMealByName = async (mealName: string) => {
    try {
        const response = await fetch(`${URL}search.php?s=${mealName}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const listMealByFirstLetter = async (mealFirstLetter: string) => {
    try {
        const response = await fetch(`${URL}search.php?f=${mealFirstLetter}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const lookupMealById = async (mealId: string) => {
    try {
        const response = await fetch(`${URL}lookup.php?i=${mealId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const lookupSingleRandomMeal = async () => {
    try {
        const response = await fetch(`${URL}random.php`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const listAllMealCategories = async () => {
    try {
        const response = await fetch(`${URL}categories.php`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const getBrowseableListForCategory = async () => {
    try {
        const response = await fetch(`${URL}list.php?c=list`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const getBrowseableListForArea = async () => {
    try {
        const response = await fetch(`${URL}list.php?a=list`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const getBrowseableListForIngredient = async () => {
    try {
        const response = await fetch(`${URL}list.php?i=list`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const filterByMainIngredient = async (ingredient: string) => {
    try {
        const response = await fetch(`${URL}filter.php?i=${ingredient}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const filterByCategory = async (category: string) => {
    try {
        const response = await fetch(`${URL}filter.php?c=${category}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}

const filterByArea = async (area: string) => {
    try {
        const response = await fetch(`${URL}filter.php?a=${area}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching meal data:', error)
        throw error
    }
}
