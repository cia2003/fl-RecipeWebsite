// import { useCallback, useMemo, useState } from 'react'
// import {
//   lookupSingleRandomMeal,
//   filterByCategory,
// } from '../../services/mealService'

// export interface MealCard {
//   id: string
//   title: string
//   img: string
// }

// const useHomeActions = () => {
//   const [isLoading, setIsLoading] = useState(false)

//   const runMealRequest = useCallback(async (request: () => Promise<unknown>) => {
//     setIsLoading(true)

//     try {
//       return await request()
//     } catch (error) {
//       console.error('Unable to load meal data from the Home page:', error)
//       return null
//     } finally {
//       setIsLoading(false)
//     }
//   }, [])

//   const actions = useMemo(
//     () => ({
//       getFourRandomMeals: () =>
//         runMealRequest(async () => {
//           const meals: MealCard[] = []
//           const ids = new Set<string>()

//           while (meals.length < 4) {
//             const response = await lookupSingleRandomMeal()
//             const meal = response.meals[0]

//             if (!ids.has(meal.idMeal)) {
//               ids.add(meal.idMeal)

//               meals.push({
//                 id: meal.idMeal,
//                 title: meal.strMeal,
//                 img: meal.strMealThumb,
//               })
//             }
//           }

//           return meals
//         }),
//       getMealsByCategory: (category: string) => 
//         runMealRequest(async () => {
//           const response = await filterByCategory(category)
//           const meals: MealCard[] = response.meals
//             .slice(0, 4)
//             .map((meal) => ({
//               id: meal.idMeal,
//               title: meal.strMeal,
//               img: meal.strMealThumb,
//             }))
          
//           return meals
//         }),
//     }),
//     [runMealRequest],
//   )

//   return {
//     ...actions, 
//     isLoading,
//   }
// }

// export default useHomeActions
