import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-[12px] max-w-5xl justify-center flex my-0 mx-auto flex-col">
      <div className="w-full flex justify-between gap-2">
        <ul className="mt-3 flex gap-3 flex-col mb-3">
          <li className="cursor-pointer hover:text-myblue2">Countries</li>
          <li className="cursor-pointer hover:text-myblue2">Regions</li>
          <li className="cursor-pointer hover:text-myblue2">Cities</li>
          <li className="cursor-pointer hover:text-myblue2">Districts</li>
          <li className="cursor-pointer hover:text-myblue2">Airports</li>
          <li className="cursor-pointer hover:text-myblue2">Hotels</li>
        </ul>
        <ul className="mt-3 flex gap-3 flex-col mb-3">
          <li className="cursor-pointer hover:text-myblue2">Homes </li>
          <li className="cursor-pointer hover:text-myblue2">Apartments </li>
          <li className="cursor-pointer hover:text-myblue2">Resorts </li>
          <li className="cursor-pointer hover:text-myblue2">Villas</li>
          <li className="cursor-pointer hover:text-myblue2">Hostels</li>
          <li className="cursor-pointer hover:text-myblue2">Guest houses</li>
        </ul>
        <ul className="mt-3 flex gap-3 flex-col mb-3">
          <li className="cursor-pointer hover:text-myblue2">
            Unique places to stay{" "}
          </li>
          <li className="cursor-pointer hover:text-myblue2">Reviews</li>
          <li className="cursor-pointer hover:text-myblue2">
            Unpacked: Travel articles{" "}
          </li>
          <li className="cursor-pointer hover:text-myblue2">
            Travel communities{" "}
          </li>
          <li className="cursor-pointer hover:text-myblue2">
            Seasonal and holiday deals{" "}
          </li>
        </ul>
        <ul className="mt-3 flex gap-3 flex-col mb-3">
          <li className="cursor-pointer hover:text-myblue2">Car rental </li>
          <li className="cursor-pointer hover:text-myblue2">Flight Finder</li>
          <li className="cursor-pointer hover:text-myblue2">
            Restaurant reservations{" "}
          </li>
          <li className="cursor-pointer hover:text-myblue2">Travel Agents </li>
        </ul>
        <ul className="mt-3 flex gap-3 flex-col mb-3">
          <li className="cursor-pointer hover:text-myblue2">
            Curtomer Service
          </li>
          <li className="cursor-pointer hover:text-myblue2">Partner Help</li>
          <li className="cursor-pointer hover:text-myblue2">Careers</li>
          <li className="cursor-pointer hover:text-myblue2">Sustainability</li>
          <li className="cursor-pointer hover:text-myblue2">Press center</li>
          <li className="cursor-pointer hover:text-myblue2">
            Safety Resource Center
          </li>
          <li className="cursor-pointer hover:text-myblue2">
            Investor relations
          </li>
          <li className="cursor-pointer hover:text-myblue2">
            Terms & conditions
          </li>
        </ul>
      </div>
      <div className="cursor-pointer hover:text-myblue2">
        Copyright © 2022 HennerBooing.
      </div>
    </footer>
  );
};

export default Footer;
