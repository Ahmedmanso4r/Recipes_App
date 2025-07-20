import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../APIs/config";
import { useNavigate } from "react-router-dom";

export default function AddRecipe() {
  const navigate = useNavigate();
  const [recipeForm, setRecipeForm] = useState({
    recipeName: "",
    recipeDescription: "",
  });

  const [recipeFormErrors, setRecipeFormErrors] = useState({
    recipeName: "",
    recipeDescription: "",
  });

  useEffect(() => {
    console.log("Recipe Form Updated:", recipeForm);
  }, [recipeForm]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "recipeName") {
      setRecipeForm({
        ...recipeForm,
        recipeName: value,
      });
      setRecipeFormErrors({
        ...recipeFormErrors,
        recipeName:
          value.length == 0
            ? "Recipe name is required"
            : value.length < 3
            ? "Recipe name must be at least 3 characters long"
            : null,
      });
    }
    if (id === "description") {
      setRecipeForm({
        ...recipeForm,
        recipeDescription: value,
      });
      setRecipeFormErrors({
        ...recipeFormErrors,
        recipeDescription:
          value.length == 0
            ? "Recipe description is required"
            : value.length < 10
            ? "Recipe description must be at least 10 characters long"
            : null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/recipe/add", {
        name: recipeForm.recipeName,
        description: recipeForm.recipeDescription,
      })
      .then(
        (res) =>
          console.log("Recipe added successfully:", res.data) || navigate("/")
      )
      .catch((err) => {
        console.error("Error adding recipe:", err);
      });
  };
  return (
    <>
      <h1 className="text-left">Add New Recipe</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label">
            Recipe Name
          </label>
          <input
            type="text"
            className= {`form-control ${recipeFormErrors.recipeName && "border-danger"}`}
            id="recipeName"
            aria-describedby="recipeHelp"
            value={recipeForm.recipeName}
            onChange={handleChange}
            placeholder="Enter Recipe Name"
          />
          {recipeFormErrors.recipeName && (
            <div id="recipeHelp" className="form-text text-danger">
              {recipeFormErrors.recipeName}{" "}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Recipe Description
          </label>
          <textarea
            type="password"
            className="form-control"
            id="description"
            rows={5}
            placeholder="Enter Recipe Description"
            onChange={handleChange}
            value={recipeForm.recipeDescription}
          ></textarea>
          {recipeFormErrors.recipeDescription && (
            <div id="recipeHelp" className="form-text text-danger">
              {recipeFormErrors.recipeDescription}{" "}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
