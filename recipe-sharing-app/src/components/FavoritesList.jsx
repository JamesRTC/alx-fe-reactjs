import React from "react";
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore();

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Favorites ❤️</h2>
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 font-bold hover:underline">
              {recipe.title}
            </Link>
            <button
              onClick={() => removeFavorite(recipe.id)}
              className="ml-2 text-sm px-3 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;
