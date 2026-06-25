
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Navbar() 
{
  const [showDropdown, setShowDropdown] =
    useState(false);
    const navigate = useNavigate();
  return (
    <nav className="navbar">

      <h1 className="logo">LETFLIX</h1>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/movies">Movies</Link>

        <Link to="/games">Games</Link>

        <Link to="/watchlist">My List</Link>

        <Link to="/languages">
          Languages
        </Link>
      </div>

      <div className="nav-icons">
        <span>🔍</span>
        <span>🔔</span>
        <span>👦</span>
        <div
          className="profile-section"
          onClick={() =>
            setShowDropdown(!showDropdown)
          }
        >
          😀 ▼
          {showDropdown && (
            <div className="dropdown">
              <p>Manage Profiles</p>

              <p>Transfer Profile</p>

              <p>Account</p>

              <p>Health Check</p>

              <p
  onClick={() => {
    setShowDropdown(false);
    navigate("/profiles");
  }}
  style={{ cursor: "pointer" }}
>
  Sign Out
</p>
            </div>
          )}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;