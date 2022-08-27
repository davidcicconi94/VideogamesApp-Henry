import React from "react";

const Pagination = ({ videogames, pagination, gamesPerPage }) => {
  const pageNumber = [];
  console.log(pageNumber);

  for (let i = 0; i <= Math.ceil(videogames / gamesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <div>
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
