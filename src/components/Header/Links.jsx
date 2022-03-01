import React from "react";
import { Link } from "react-router-dom";
import {FaSearch,FaImage,FaNewspaper,FaYoutube} from "react-icons/fa"


const links = [
  { url: "/search", text: 'All',icon:<FaSearch/> },
  { url: "/images", text: 'images',icon:<FaImage/> },
  { url: "/news", text: 'news',icon:<FaNewspaper/> },
  { url: "/videos", text: 'videos' ,icon:<FaYoutube/> },
];
const Links = () => {
  return (
    <div className="flex justify-center w-50 items-center mt-5 ">
      {links.map((link) => (
        <Link
          key={link.text}
          to={link.url}
          className="sm:w-40 m-2 mb-0 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 flex ml-1 pl-2 justify-around items-center"
        > {link.icon}<h1 className="sm:pl-2">{link.text}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Links;
