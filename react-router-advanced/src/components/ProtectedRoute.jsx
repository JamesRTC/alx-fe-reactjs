import { Navigate } from "react-router-dom";
import auth from "../auth";

export default function ProtectedRoute({ children }) {
  return auth.isAuthenticated ? children : <Navigate to="/" />;
}
