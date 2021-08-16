import { useState, useEffect } from "react";
import axios from "axios";
import "../Pages/Characters.css";
import { Link } from "react-router-dom";

export default function Characters() {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const flechdata = async () => {
      const response = await axios.get(
        "https://marvel-back-app.herokuapp.com/characters"
      );
      setData(response.data.results);
      setIsLoading(false);
    };
    flechdata();
  }, []);
  return (
    <div>
      {isloading ? (
        <div>is loading...</div>
      ) : (
        <div className="containerCardCharacters">
          {data.map((elem, index) => {
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
                  <span className="descCardCharacters">{elem.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
