import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarShips from './pages/StarShips/StarShips';
import StarshipPage from "./pages/StarshipPage/StarshipPage"

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<StarShips/>}/>
        <Route path="/starship" element={<StarshipPage/>}/>
      </Routes>
    </>
  );
}

export default App;