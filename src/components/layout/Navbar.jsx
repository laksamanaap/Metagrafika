import React from "react";
import metaLogo from "../../img/meta_logo.svg";
import calendar from "../../img/calendar.svg";

const Navbar = () => {
  return(
    <div id="header" className="sticky top-0 bg-white shadow p-4 z-10">
      <div className="container  flex justify-between items-center">
        <div className="justify-start">
          <a href="#hero">
            <img src={metaLogo} alt="Meta" width="48" height="48"/>
          </a>
        </div>
        <div className="justify-center">
          <ul className="list-none flex">
            <li className="mx-1 lg:mx-3 text-secondary hover:text-accent transition duration-300"><a href="#hero">Home</a></li>
            <li className="mx-1 lg:mx-3 text-secondary hover:text-accent transition duration-300"><a href="#cta">Our 3D</a></li>
            <li className="mx-1 lg:mx-3 text-secondary hover:text-accent transition duration-300"><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="justify-end">
          <a href="#link">
            <div className="flex flex-row shadow rounded border border-secondary hover:bg-accent transition duration-300 p-2">
                <img src={calendar} alt="Calendar" width="24" height="24"/>
                <p className="ps-1 text-primary">Event</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;