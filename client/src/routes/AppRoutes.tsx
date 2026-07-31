import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Recipes from '../pages/Recipes/Recipes'
import Explore from '../pages/Explore/Explore'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/explore' element={<Explore />} />
        </Routes>
    )
}
