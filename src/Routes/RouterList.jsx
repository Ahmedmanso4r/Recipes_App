import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router';
// import RecipesList from '../pages/RecipesList.jsx';
// import RecipeDetails from '../pages/RecipeDetails.jsx';
// import AddRecipe from '../pages/AddRecipe.jsx';
// import Settings from '../pages/Settings.jsx';   
// import RecipeCounter from '../pages/RecipeCounter.jsx';
import NotFound from '../pages/NotFound.jsx';
import LayoutWithHeader from '../components/LayoutWithHeader.jsx';


const RecipesList = lazy(() => import('../pages/RecipesList.jsx'));
const RecipeDetails = lazy(() => import('../pages/RecipeDetails.jsx'));
const AddRecipe = lazy(() => import('../pages/AddRecipe.jsx'));
const Settings = lazy(() => import('../pages/Settings.jsx'));
const RecipeCounter = lazy(() => import('../pages/RecipeCounter.jsx'));

export default function RouterList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
          <Route element={<LayoutWithHeader />}>
            <Route path="/" element={<RecipesList />} />
            <Route
              path="/recipe-details/:id/:name"
              element={<RecipeDetails />}
            />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/recipe-counter" element={<RecipeCounter />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
  );
}
