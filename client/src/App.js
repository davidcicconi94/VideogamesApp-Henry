import "./App.css";
import Order from "./components/Order";
import SearchBar from "./components/SearchBar";
import Videogames from "./components/Videogames";
import Pagination from "./components/Pagination";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Form from "./components/Form";
import Details from "./components/Details";

function App() {
  // let videogames = useSelector((state) => state.videogames);

  // // Paginación
  // const [currentPage, setCurrentPage] = useState(1); //lo seteo en 1 porque siempre arranco por la primer pagina
  // const gamesPerPage = 15; //cantidad de juegos que debe haber por pagina
  // const indexOfLastGame = currentPage * gamesPerPage; // 1 * 15 = 15
  // const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15 = 0
  // const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame); //para dividir la cantidad de juegos por pagina

  // const pagination = (pageNumb) => {
  //   setCurrentPage(pageNumb);
  // };
  return (
    <div className="App">
      <Routes>
        <Route exact path={"/"} element={<LandingPage />} />
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/create"} element={<Form />} />
        <Route exact path={"/details/:id"} element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
