import React from "react";

function Nav() {
  return (
    <nav className="flex items-center justify-center md:justify-start md:space-x-5 p-4">
      <img src={"cryptotimeframe-logo.svg"} className="h-10 w-auto" />
      <div className="md:flex md:items-center md:space-x-5 hidden text-main font-semibold hover:text-white">
        <a href="#about">About</a>
        <a href="#value">Value</a>
        <a href="#Bears">Bears</a>
        <a href="#Bulls">Bulls</a>
        <a href="#">Roadmap</a>
      </div>
    </nav>
  );
}

export default Nav;
