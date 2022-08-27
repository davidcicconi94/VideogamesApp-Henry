import "./App.css";
import Order from "./components/Order";
import SearchBar from "./components/SearchBar";
import Videogames from "./components/Videogames";
import Pagination from "./components/Pagination";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  let videogames = useSelector((state) => state.videogames);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1); //lo seteo en 1 porque siempre arranco por la primer pagina
  const gamesPerPage = 15; //cantidad de juegos que debe haber por pagina
  const indexOfLastGame = currentPage * gamesPerPage; // 1 * 15 = 15
  const indexOfFirstGame = indexOfLastGame - gamesPerPage; // 15 - 15 = 0
  const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame); //para dividir la cantidad de juegos por pagina

  const pagination = (pageNumb) => {
    setCurrentPage(pageNumb);
  };
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <SearchBar />
      <Order />
      <Pagination
        pagination={pagination}
        videogames={videogames.length}
        gamesPerPage={gamesPerPage}
      />
      <Videogames currentGames={currentGames} />
    </div>
  );
}

export default App;
