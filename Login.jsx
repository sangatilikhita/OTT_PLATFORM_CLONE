import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      username === "likhita" &&
      password === "1234"
    ) {
      navigate("/profiles");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
  <div className="login-page">
    <div className="login-box">

      <h1>LETFLIX LOGIN</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  </div>
);
}

export default Login;