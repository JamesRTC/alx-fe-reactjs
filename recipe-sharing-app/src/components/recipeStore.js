import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)),
    })),

  searchTerm: "",

  // Function to set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Automatically update filtered recipes when search term changes
  },

  // Function to filter recipes based on searchTerm
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
