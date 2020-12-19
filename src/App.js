import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/Api";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    getMatches()
      .then((data) => console.log("DATA", data))
      .catch();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my Live Score APP</h1>
      <MyCard />
      {}
    </div>
  );
}

export default App;
