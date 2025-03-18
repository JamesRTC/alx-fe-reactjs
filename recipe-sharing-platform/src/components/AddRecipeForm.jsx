import { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Title is required";
    if (!formData.ingredients || formData.ingredients.split(",").length < 2)
      tempErrors.ingredients = "At least two ingredients are required";
    if (!formData.steps) tempErrors.steps = "Preparation steps are required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Recipe Submitted:", formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
export default AddRecipeForm;
