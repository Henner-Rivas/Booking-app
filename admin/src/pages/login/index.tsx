import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import "./styles.scss";
const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const {
    state: { loading, error },
    dispatch,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START", payload: {} });
    try {
      const res = await axios.post(
        "http://localhost:3005/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.body });
      if (res.data.body.isAdmin) {
        navigate("/");
      } else {
        console.log("You are not allowed", res.data);
        dispatch({ type: "LOGIN_FAILURE", payload: "You are not allowed!" });
      }
    } catch (err: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <h1 className="title">Login</h1>
      <form className="flex flex-col  max-w-2xl min-w-[400px]">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick}>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </form>
    </div>
  );
};

export default Login;
