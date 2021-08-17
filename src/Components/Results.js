import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Results() {
  const { searchInput } = useParams();
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const flechdata = async () => {
      const response = await axios.get(
        `http://localhost:4000/search/${category}/${searchInput}`
      );
      setData(response.data.results);
      setIsLoading(false);
    };
    flechdata();
  }, [searchInput, category]);

  return (
    <div>
      {isLoading ? (
        <div>is loading...</div>
      ) : (
        <div className="containerCardCharacters">
          {category === "characters"
            ? data.map((elem, index) => {
                return (
                  <div key={index} className="cardCharacters">
                    <Link to={`/comics/${elem._id}`}>
                      <img
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt="imgCharacters"
                      />
                    </Link>

                    <div className="cardBodyCharacters">
                      <h5 className="titreCardCharacters">{elem.name}</h5>
                      <span className="descCardCharacters">
                        {elem.description}
                      </span>
                    </div>
                  </div>
                );
              })
            : data.map((elem, index) => {
                return (
                  <div key={index} className="cardComics">
                    <img
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="imgComics"
                    />
                    <div className="cardBodyComcis">
                      <h4 className="titreCardComics">{elem.title}</h4>
                      <h5 className="descCardComics">{elem.description}</h5>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}
