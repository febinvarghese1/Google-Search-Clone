import React, { useState } from "react";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import Routing from "./components/Main/Routing";
import "./App.css";

function App() {
  const [darkToggle, setDarkToogle] = useState(false);

  return (
    <div className={darkToggle ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ease-in duration-600">
        <NavBar darkToggle={darkToggle} setDarkToggle={setDarkToogle} />
        <Routing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
