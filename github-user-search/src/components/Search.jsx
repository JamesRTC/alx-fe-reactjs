import { useState } from "react";
import fetchUsers from "../services/githubService"; // Import the correct function

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await fetchUsers(username, location, minRepos);
      setUsers(result);
    } catch (err) {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4">
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="p-2 border-b">
                <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full inline-block mr-2" />
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {user.login}
                </a>
                {user.location && <p>Location: {user.location}</p>}
              </li>
            ))}
          </ul>
        ) : (
          !loading && !error && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
