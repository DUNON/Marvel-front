import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Marvel-Comics-Logo.svg.png";
import menu from "../Assets/menu.svg";
import "../Components/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <nav>
        <ul className="liste-nav">
          <li className="item-nav">
            <Link to="/characters">Personnages</Link>
          </li>
          <li className="item-nav">
            <Link to="/comics">Comics</Link>
          </li>
          <li className="item-nav">
            <Link to="/favoris">Favoris</Link>
          </li>
        </ul>
        <div className="btn-toggle" role="button">
          <img src={menu} alt="icone menu" />
        </div>
      </nav>
    </>
  );
}
