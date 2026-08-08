import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Recipes from '../pages/Recipes/Recipes'
import Explore from '../pages/Explore/Explore'
import { DetailRecipe } from '../pages/DetailRecipe/DetailRecipe'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path='/:origin/results' element={<Recipes />} />

            <Route path='/explore' element={<Explore />} />

            <Route path='/detail-recipe' element={<DetailRecipe />}/>

            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}
