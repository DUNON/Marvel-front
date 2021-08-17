import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Pages/Search.css";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("characters");

  const history = useHistory();

  return (
    <>
      <div className="search ">
        <ul>
          <li>
            <input
              type="text"
              placeholder="Personnages ou Comics?"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </li>
          <li className="categories">
            <label htmlFor="categories">RECHERCHER DANS</label>
            <select
              id="categories"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option defaultValue value="characters">
                Characters
              </option>
              <option value="comics">Comics</option>
            </select>
          </li>
          <li>
            <button
              onClick={() => {
                history.push(`/search/${category}/${searchInput}`);
              }}
            >
              LET'S GO!
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
