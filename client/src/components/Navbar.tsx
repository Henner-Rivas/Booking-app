import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex h-[50px]  bg-myblue justify-center px-2">
      <div className="flex w-full  max-w-5xl text-white justify-between items-center">
        <span className="font-medium">
          {" "}
          <Link to="/"> Booking Henner </Link>{" "}
        </span>
        <div className="flex gap-4">
          <button className="bg-white p-1 rounded-sm text-black border-none">
            Registrate
          </button>
          <button className="bg-white p-1 rounded-sm text-black border-node">
            Iniciar sessión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
