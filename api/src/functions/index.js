// Cargamos las variables de entorno
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;

const createGame = async (req, res) => {
  try {
    const { name, image, genres, released, rating, plataforms, description } =
      req.body;

    let newGame = await Videogame.create({
      name,
      image,
      genres,
      description,
      released,
      rating,
      plataforms,
    });

    const relation = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    await newGame.addGenre(relation);
    console.log(newGame);
    res.send(newGame);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createGame };
