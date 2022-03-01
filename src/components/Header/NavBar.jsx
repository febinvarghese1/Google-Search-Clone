import React from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "./Search";
const NavBar = ({ darkToggle, setDarkToggle }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-300">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-yellow-500 font-italic text-xl text-white py-3 px-3 rounded dark:bg-grey-500 dark:text-gray-900">
            Searcher
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkToggle(!darkToggle)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border flex justify-between items-center pl-3  px-4 py-4 hover:bg-zinc-400"
        >
          {darkToggle ? "Light" : "Dark"}
          {!darkToggle ? <FaRegMoon /> : <FaRegSun />}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default NavBar;
