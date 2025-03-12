export default function useAuth() {
  const user = localStorage.getItem("user");
  return user !== null;
}
