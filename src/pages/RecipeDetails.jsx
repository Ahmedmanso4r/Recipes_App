import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../APIs/config';
export default function RecipeDetails() {
    const params = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axiosInstance.get(`/recipes/${params.id}`)
        .then ((res) => setRecipe(res.data))
        .catch((err) => console.log(err));
    }, [params.id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <div className="card h-100">
                <img
                    src={recipe.image}
                    className="card-img-top"
                    alt={recipe.name}
                />
                <div className="card-body">
                    <h1 className="card-title">{recipe.name}</h1>
                    <p className="card-text">
                        <strong>Cuisine:</strong> {recipe.cuisine} |
                        <strong> Difficulty:</strong> {recipe.difficulty} |
                        <strong> Servings:</strong> {recipe.servings}
                    </p>
                    <p className="card-text">
                        <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min |
                        <strong> Cook Time:</strong> {recipe.cookTimeMinutes} min
                    </p>
                    <p className="card-text">
                        <strong>Ingredients:</strong> {recipe.ingredients && recipe.ingredients.join(', ')}
                    </p>
                    <p className="card-text">
                        <strong>Instructions:</strong> {recipe.instructions && recipe.instructions.join(' ')}
                    </p>
                </div>
                <div className="card-footer">
                    <small className="text-body-secondary">
                        ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
                    </small>
                </div>
            </div>
        </div>
    );
}
