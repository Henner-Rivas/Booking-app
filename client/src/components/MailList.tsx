import React from "react";

const MailList = () => {
  return (
    <div className="h-[250px] gap-1 text-white bg-[#003580] mt-3 w-full flex items-center flex-col justify-center">
      <h1 className="text-[20px]">Ahora tiempo y dinero!</h1>
      <span className="mb-2">
        Registrate y enviaremos las mejores ofertas para ti
      </span>
      <div className="flex w-[400px] ">
        <input
          type="text"
          placeholder="Tu Email"
          className="pl-2 rounded-sm p-1 text-black border-[2px] border-solid  w-full border-myblue2"
        />
        <button className="bg-myblue2 py-1 px-3">Suscribirse</button>
      </div>
    </div>
  );
};

export default MailList;
