import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Recipes from '../pages/Recipes/Recipes'
import SearchRecipe from '../pages/SearchRecipe/SearchRecipe'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/category' element={<SearchRecipe />} />
        </Routes>
    )
}
