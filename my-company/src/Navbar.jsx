import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul style={{ listStylType: "none", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
        <li>
          <NavLink>Service</NavLink>
        </li>
      </ul>
    </nav>
  );
}
