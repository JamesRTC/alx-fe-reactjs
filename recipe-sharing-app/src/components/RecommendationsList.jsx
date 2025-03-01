import React, { useEffect } from "react";
import { useRecipeStore } from "../recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, []); // Generate recommendations on mount

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Recommended Recipes ⭐</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="mb-2">
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 font-bold hover:underline">
              {recipe.title}
            </Link>
          </div>
        ))
      ) : (
        <p>No recommendations yet.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
