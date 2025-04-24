import React from "react";
import "./Navbar.css";
import { ImFire } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { BsEmojiWink } from "react-icons/bs";
import DarkMode from "../darkMode/DarkMode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Movie Zone</h1>
      <div className="navbar_link">
        <DarkMode />
        <a href="#popular">
          Popular <ImFire />
        </a>
        <a href="#top_rated">
          Top Rated <FaStar />
        </a>
        <a href="#upcoming">
          Upcoming <BsEmojiWink />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
