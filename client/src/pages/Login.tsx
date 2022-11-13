import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import axios from 'axios';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { state:{loading,error}, dispatch } = useContext(AuthContext);
       
      const navigate = useNavigate()
    
      const handleChange = (e:any ) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e:any) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START",payload:{} });
        try {
          const res = await axios.post("/auth/login", credentials);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/")
        } catch (err:any) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
    
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <h1 className="text-lg">Login</h1>
    <div className="flex flex-col gap-3 max-w-2xl min-w-[400px]">
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="p-3 outline-none rounded-m border border-stone-400"
      /> 
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="p-3 outline-none rounded-m border border-stone-400"
      />
      <button disabled={loading} onClick={handleClick} className="bg-myblue2 w-full rounded-md text-white p-2">
        Login
      </button>
      {error && <span>{error.message}</span>}
    </div>
  </div>  )
}

export default Login