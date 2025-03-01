import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe(recipe.id, { title, description });
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
