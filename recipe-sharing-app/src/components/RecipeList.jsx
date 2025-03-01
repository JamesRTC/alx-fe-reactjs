import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded-md shadow-sm mb-2">
            {/* Clickable link to navigate to RecipeDetails */}
            <Link to={`/recipe/${recipe.id}`} className="text-xl font-bold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
