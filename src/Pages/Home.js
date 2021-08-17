import React from "react";
import "../Pages/Home.css"
import bas from "../Assets/bas.svg"
import Search from "./Search";

export default function Home() {
  return (
    <div className="wrapper">
      <Search/>
      <div className="home-bg-img">
        <img className="home-bas-forme " alt="home" src={bas} />
      </div>
    </div>
  );
}
