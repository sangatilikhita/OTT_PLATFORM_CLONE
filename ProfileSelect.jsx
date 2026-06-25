import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileSelect() {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState([
    "Likhita",
    "Kids",
  ]);

  const addProfile = () => {
    const name = prompt("Enter Profile Name");

    if (name) {
      setProfiles([...profiles, name]);
    }
  };

  return (
    <div className="profiles">
      <h1>Who's Watching?</h1>

      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="profile"
            onClick={() => navigate("/home")}
          >
            😀
            <p>{profile}</p>
          </div>
        ))}

        <div
          className="profile"
          onClick={addProfile}
        >
          ➕
          <p>Add Profile</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSelect;