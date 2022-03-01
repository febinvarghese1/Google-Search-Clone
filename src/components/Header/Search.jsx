import React, { useEffect, useState } from "react";
import Links from "./Links";
import { useResultContext } from "../../Contexts/ResultContextProvider";
import { useDebounce } from "use-debounce";
import {FaSearch} from "react-icons/fa"
const Search = () => {
  const [text, setText] = useState("Elon musk");
  const { setSearchItem } = useResultContext();
  const [debouncedValue] = useDebounce(text, 1600);
  useEffect(() => {
    if (debouncedValue) {
      setSearchItem(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-3">
      <div className="flex justify-center ml-3 pl-4 items-center">
      <input
        value={text}
        type="text"
        className="relative  sm:w-48  w-96 h-10 dark:bg-gray-200 border rounded-full shaodw-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      /><FaSearch className="block text-xl  absolute right-64 dark:text-black"/>
      {!text && (
        <button
          type="button"
          className="absolute top-1.3 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >X</button>
      )}</div>
      <Links />
    </div>
  );
};

export default Search;
