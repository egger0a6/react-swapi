import { Link, useLocation } from "react-router-dom";

const StarshipPage = () => {
  const location = useLocation()

  return (
    <div className="details-container">
      <div className="details-card">
        <p>{location.state.starship.name}</p>
        <p>{location.state.starship.model}</p>
        <Link to="/">RETURN</Link>
      </div>
    </div>
  );
}

export default StarshipPage;