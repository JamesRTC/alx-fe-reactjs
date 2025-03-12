import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render the current route's component */}
    </>
  );
}

export default Layout;
