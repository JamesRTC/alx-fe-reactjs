import { useNavigate } from "react-router-dom";
import auth from "../auth";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      {auth.isAuthenticated ? (
        <button onClick={() => auth.logout(() => navigate("/"))}>Logout</button>
      ) : (
        <button onClick={() => auth.login(() => navigate("/profile"))}>Login</button>
      )}
    </div>
  );
}
