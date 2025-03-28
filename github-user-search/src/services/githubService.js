import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com";

const fetchUsers = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?${query}`);

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};

export default fetchUsers;
