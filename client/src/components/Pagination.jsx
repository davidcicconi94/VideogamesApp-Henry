import React from "react";
import "../styles/Pagination.style.css";

const Pagination = ({ videogames, pagination, gamesPerPage }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(videogames / gamesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      {pageNumber &&
        pageNumber.map(
          (
            number //si en pageNumber hay algo mapealo
          ) => (
            <span key={number}>
              <button onClick={() => pagination(number)}>{number}</button>
            </span>
          )
        )}
    </div>
  );
};

export default Pagination;
