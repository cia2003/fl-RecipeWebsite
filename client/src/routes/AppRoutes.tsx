import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Recipes from '../pages/Recipes/Recipes'
import Explore from '../pages/Explore/Explore'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path='/:origin/results' element={<Recipes />} />

            <Route path='/explore' element={<Explore />} />

            {/* <Route path='/' /> */}
        </Routes>
    )
}
