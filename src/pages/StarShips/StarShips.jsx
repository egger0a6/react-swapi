import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStarShips } from "../../services/sw-api";

const StarShips = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarShips = async () => {
      const shipData = await getStarShips();
      setStarships(shipData.results)
    }
    fetchStarShips()
  }, [])

  return (
    <>
      {starships.length ?
        <div className="starships-container">
          {starships.map(starship => 
            <Link 
              className="starship-card"
              key={starship.name} 
              to="/starship" 
              state={{starship}}
            >
              {starship.name}
            </Link>
          )}
        </div>
        :
        <>
          <h1>Loading...</h1>
        </>
      }
    </>
  );
}

export default StarShips;