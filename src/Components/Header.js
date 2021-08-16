import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Marvel-Comics-Logo.svg.png";
import menu from "../Assets/menu.svg";
import "../Components/Header.css";
import search from "../Assets/search.svg"

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
          <li className="item-nav">
            <form  className="formSubmit">
              <input type="text" className="inputRecherche" />
              <button type="submit">
                <img src={search} alt="loupe" className="logoloupe" />
              </button>
            </form>
          </li>
          
        </ul>
        <div className="btn-toggle" role="button">
          <img src={menu} alt="icone menu" />
        </div>
      </nav>
    </>
  );
}
