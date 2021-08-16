import { useState,useEffect }from 'react'
import axios from 'axios';
import "../Pages/Comics.css"

export default function Comics() {
    const [data,setData]=useState()
    const [isloading,setIsLoading]=useState(true)

    useEffect(() => {
        const flechdata = async()=>{
            const response =await axios.get("https://marvel-back-app.herokuapp.com/comics")
            setData(response.data.results);
            setIsLoading(false)

        }
        flechdata()
    }, [])

    return (
        <div>
          {isloading ? (<div>is loading...</div>):(
              <div className="containerCardComics">
                  {data.map((elem,index) => {
                      return <div key={index}className="cardComics">
                      <img src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} alt="imgComics" />
                      <div className="cardBodyComcis">
                          <h4 className="titreCardComics">{elem.title}</h4>
                          <h5 className="descCardComics">{elem.description}</h5>
                      </div>
                      </div>
                      
                  })}
              </div>
          )}
        </div>
    )
}
