import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
      </ul>
    </nav>
  );
}
