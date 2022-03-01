import React, { useEffect } from "react";
import { useLocation } from "react-router";
import ReactPlayer from "react-player";
import Loading from "./Loading";
import { useResultContext } from "../../Contexts/ResultContextProvider";

const Results = () => {
  const { results, isloading, fetchApi, searchItem } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchItem !== "") {
      if (location.pathname === "/videos") {
        fetchApi(`/search/q=${searchItem} videos`);
      } else {
        fetchApi(`${location.pathname}/q=${searchItem}&num=40`);
      }
    }
  }, [searchItem, location.pathname]);

  if (isloading) return <Loading />;

  if (location.pathname === "/search") {
    return (
      <div className="flex flex-wrap items-center justify-between space-y-6 sm:px-56">
        {results?.results?.map(({ link, title, description }, index) => (
          <div key={index} className="md:w-2/5 w-full">
            <a href={link} rel="noreferrer" target="_blank">
              <p className="text-sm">
                {link.length > 30 ? link.substring(0, 30) : link}
              </p>
              <p className="text-lg hover:underline dark:text-blue-300 text-blue-900">
                {title}
              </p>
              <p className="text-sm">
                {description.length > 150
                  ? description.substring(0, 150)
                  : description}
              </p>
            </a>
          </div>
        ))}
      </div>
    );
  }
  if (location.pathname === "/images") {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {results?.image_results?.map(
          ({ image, link: { title, href } }, index) => (
            <a
              className="sm:p-3 p-6"
              key={index}
              href={href}
              rel="noreferrer"
              target="_blank"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-3">{title}</p>
            </a>
          )
        )}
      </div>
    );
  }
  if (location.pathname === "/videos") {
    return (
      <div className="flex flex-wrap">
        {results?.results?.map((video, index) => (
          <div key={index} className="p-2">
            {video?.additional_links?.[0]?.href && (
              <ReactPlayer
                url={video.additional_links?.[0].href}
                controls
                width="350px"
                height="300px"
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/news") {
    return (
      <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
        {results?.entries?.map(({ links, id, source, title }) => (
          <div key={id} className="md:w-2/5 w-full">
            <a
              href={links?.[0].href}
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              <p className="text-lg  dark:text-blue-300 text-blue-900">
                {title}
              </p>
            </a>
            <div className="flex gap-4">
              <a href={source?.href} rel="noreferrer" target="_blank">
                {source?.href}
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Results;
