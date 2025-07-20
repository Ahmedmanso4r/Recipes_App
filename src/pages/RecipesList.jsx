import { useState, useEffect } from "react";
import RecipesCard from "../components/RecipesCard.jsx";
import { axiosInstance } from "../APIs/config.js";
export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`/recipes` , {
        params: {
            limit: 20,
            skip: 0,
            }
  })
      .then((response) => setRecipes(response.data.recipes))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const deleteRecipe = (id) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  };
  return (
    <>
      <h1>Recipes List</h1>
      <hr />
        {loading && <div className="text-center">Loading...</div>}
        {!loading && recipes.length === 0 && (
            <div className="alert alert-danger text-center">
            No Recipes Found
            </div>
        )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="col">
              <RecipesCard recipeItem={recipe} onDelete={deleteRecipe} />
            </div>
          );
        })}
      </div>
    </>
  );
}
