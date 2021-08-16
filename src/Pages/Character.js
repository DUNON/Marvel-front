import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/Character.css";

export default function Character() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const flechdata = async () => {
      const response = await axios.get(`https://marvel-back-app.herokuapp.com/comics/${id}`);
      setData(response.data.comics);
      setIsLoading(false);
    };
    flechdata();
  }, [id]);

  return (
    <div>
      {isloading ? (
        <div>is loading...</div>
      ) : (
        <div className="containerCardCharacter">
          {data.map((elem, index) => {
            return (
              <div key={index} className="cardCharacter">
                <img
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt="imgCharacter"
                />
                <div className="cardBodyCharacter">
                  <h4 className="titreCardCharacter">{elem.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
