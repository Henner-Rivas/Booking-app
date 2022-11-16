import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Navbar = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <nav className="flex h-[50px]  bg-myblue justify-center px-2">
      <div className="flex w-full  max-w-5xl text-white justify-between items-center">
        <span className="font-medium">
          {" "}
          <Link to="/"> Booking Henner </Link>{" "}
        </span>

        {user ? (
          <div className="flex gap-2">
            {" "}
            <span> Welcome</span>{" "}
            <h1 className="font-medium"> {user.body.usermane} </h1>{" "}
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="bg-white py-1 px-2 rounded-sm text-myblue2 border-none">
              Registrate
            </button>
            <Link to="/login">
              <button className="bg-white py-1 px-2 rounded-sm text-myblue2 border-node">
                Iniciar sessión
              </button>
            </Link>{" "}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
