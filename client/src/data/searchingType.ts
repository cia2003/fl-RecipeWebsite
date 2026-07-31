import { LuLeaf, LuGlobe, LuCookingPot } from "react-icons/lu" 

const searchingTypes = [
    {
        id: 1,
        title: 'Category', 
        name: 'category', 
        icon: LuLeaf, 
        description: "Browse meal types like Chicken, Dessert, Seafood, and more.", 
        altDescription: "Choose a category to see delicious recipes.",
        color: 'red'
    }, 
    {
        id:2, 
        title: 'Cuisine', 
        name: 'area', 
        icon: LuGlobe, 
        description: "Explore recipes from countries around the world.", 
        altDescription: "Explore recipes from different countries.",
        color: 'green'
    }, 
    {
        id: 3, 
        title: 'Main Ingredient', 
        name: 'ingredient', 
        icon: LuCookingPot, 
        description: "Find meals based on the main ingredient you have on hand.", 
        altDescription: "Find recipes using your favorite ingredients",
        color: 'yellow'
    }
]

export default searchingTypes