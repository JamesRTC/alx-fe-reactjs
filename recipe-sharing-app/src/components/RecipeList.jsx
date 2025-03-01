import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const { filteredRecipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded-md shadow-sm mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-xl font-bold text-blue-600 hover:underline">
              {recipe.title}
            </Link>
            <p className="text-gray-600">{recipe.description}</p>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(recipe.id)}
              className={`mt-2 px-4 py-2 text-sm rounded ${
                favorites.includes(recipe.id) ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
            >
              {favorites.includes(recipe.id) ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
