import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul
        style={{
          listStylType: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "beige",
        }}
      >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      </ul>
    </nav>
  );
}
