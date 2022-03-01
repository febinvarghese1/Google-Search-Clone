import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const fetchApi = async (typeUrl) => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${typeUrl}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();
    console.log(data);

    setResults(data);

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ fetchApi, results, searchItem, setSearchItem, isloading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
