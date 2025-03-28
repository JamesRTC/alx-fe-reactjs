import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com";

const fetchUsers = async (username, location, minRepos) => {
  try {
    // Construct the search query
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Ensure the query is correctly formatted
    const apiUrl = `"https://api.github.com/search/users?q"`;

    console.log("GitHub API Request:", apiUrl); // Debugging log

    const response = await axios.get(apiUrl);
    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};

export default fetchUsers;
