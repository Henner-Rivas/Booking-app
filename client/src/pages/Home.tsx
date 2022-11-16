import React from "react";
import PropertyList from "../components/ListProperty";
import MailList from "../components/MailList";
import Header from "../components/Header";
import ListPropertyCity from "../components/ListPropertyCity";
import ListFeatured from "../components/ListFeatured";

const Home = () => {
  return (
    <>
      <Header noHome={true} />
      <div className="min-h-screen mt-[50px] flex gap-5   w-full flex-col items-center ">
        <ListPropertyCity />

        <h1 className="text-[18px] t-1 max-w-5xl font-bold ">
          {" "}
          Busca por tipo de propiedad{" "}
        </h1>

        <PropertyList />

        <h1 className="text-[18px] t-1 max-w-5xl font-bold ">
          {" "}
          Casas que las personas aman{" "}
        </h1>

        <ListFeatured />

        <MailList />
      </div>
    </>
  );
};

export default Home;
