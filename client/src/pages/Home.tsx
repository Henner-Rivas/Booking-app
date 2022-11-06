import React from "react";
import Featured from "../components/Featured";
import PropertyList from "../components/PropertyList";
import FeaturedProperties from "../components/FeaturedProperties";
import MailList from "../components/MailList";

const Home = () => {
  return (
    <>
      <div className="min-h-screen mt-[50px] flex gap-5   w-full flex-col items-center ">
        <Featured />

        <h1 className="text-[18px] t-1 max-w-5xl font-bold ">
          {" "}
          Busca por tipo de propiedad{" "}
        </h1>

        <PropertyList />

        <h1 className="text-[18px] t-1 max-w-5xl font-bold ">
          {" "}
          Casas que las personas aman{" "}
        </h1>

        <FeaturedProperties />

        <MailList />
      </div>
    </>
  );
};

export default Home;
