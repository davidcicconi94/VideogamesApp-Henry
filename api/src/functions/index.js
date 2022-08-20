// Cargamos las variables de entorno
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const { totalData } = require("../controllers/index.js");

/* const findGame = async (req, res) => {
  const { name } = req.query;
  let allVideogames = totalData();
  console.log(allVideogames);

  if (name) {
  }
};

findGame(); */

const createGame = async (req, res) => {
  try {
    const { name, image, genres, released, rating, platforms, description } =
      req.body;

    let newGame = await Videogame.create({
      name,
      image,
      genres,
      description,
      released,
      rating,
      platforms,
    });

    const relation = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    await newGame.addGenre(relation);

    res.send(newGame);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createGame };
