import React from "react";
import { useNavigate } from "react-router";
export default function recipeItemsCard(props) {
  const { recipeItem, onDelete } = props;
  const navigate = useNavigate();
  const redirectToDetail = (id , name , cuisine) => {
    navigate(`/recipe-details/${id}/${name}?Cuisine=${cuisine}`);
  }

  return (
    <div className="card h-100">
      <img
        src={recipeItem.image}
        className="card-img-top"
        alt={recipeItem.name}
      />
      <div className="card-body">
        <h5 className="card-title">{recipeItem.name}</h5>
        <p className="card-text">
          <strong>Cuisine:</strong> {recipeItem.cuisine} |
          <strong> Difficulty:</strong> {recipeItem.difficulty} |
          <strong> Servings:</strong> {recipeItem.servings}
        </p>
        <p className="card-text">
          <strong>Prep Time:</strong>{" "}
          {recipeItem.prepTimeMinutes <= 15 ? (
            <span className="badge text-bg-success">Easy to go</span>
          ) : (
            <span className="badge text-bg-warning">Need more time</span>
          )}{" "} 
          |<strong> Cook Time:</strong> {recipeItem.cookTimeMinutes} min
        </p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">
          ⭐ {recipeItem.rating} ({recipeItem.reviewCount} reviews)
        </small>
      </div>
      <div className="card-footer">
      <button
        className="mx-2 btn btn-primary"
        onClick={() => redirectToDetail(recipeItem.id , recipeItem.name , recipeItem.cuisine)}
      >
        View
      </button>
      <button
        className="mx-2 btn btn-danger"
        onClick={() => onDelete(recipeItem.id)}
      >
        Delete
      </button>
      </div>
    </div>
  );
}
