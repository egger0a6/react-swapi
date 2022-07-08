import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getPilots } from "../../services/sw-api";

const StarshipPage = () => {
  const location = useLocation()
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchPilots = async () => {
      const pilots = await getPilots(location.state.starship.pilots);
      setPilots(pilots);
    }
    fetchPilots();
  }, [location.state.starship.pilots])

  return (
    <div className="details-container">
      <div className="details-card">
        <h2>{location.state.starship.name}</h2>
        <p>
          MODEL: <span style={{fontStyle:"italic"}}>
          {location.state.starship.model}
          </span>
        </p>
        {pilots?.length ?
          <>
            Pilots:
            <ul aria-label="Pilots:">
              {pilots.map(pilot => 
                <li key={pilot.name}>{pilot.name}</li>
              )}
            </ul>
          </>
          :
          <>
            <p>No Pilots</p>
          </>
        }
        <Link to="/" className="return-btn">RETURN</Link>
      </div>
    </div>
  );
}

export default StarshipPage;