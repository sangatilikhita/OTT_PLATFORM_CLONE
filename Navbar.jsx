import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>LETFLIX </h1>

      <div>

        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;