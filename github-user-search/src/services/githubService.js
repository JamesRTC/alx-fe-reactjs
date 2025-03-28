import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error;
  }
};

export default fetchUserData;
