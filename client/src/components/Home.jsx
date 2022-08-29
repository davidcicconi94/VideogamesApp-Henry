import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Order from "./Order";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Videogames from "./Videogames";

const Home = () => {
  let videogames = useSelector((state) => state.allVideogames);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame);

  const pagination = (pageNumb) => {
    setCurrentPage(pageNumb);
  };
  return (
    <div>
      <Navbar />
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
