import React, { useState } from "react";
import { useSelector } from "react-redux";
import Order from "./Order";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Videogames from "./Videogames";

const Home = () => {
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
    <div>
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
};

export default Home;
