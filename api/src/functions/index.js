// Cargamos las variables de entorno
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const { totalData, videogame } = require("../controllers/index.js");

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

const gamesById = async (req, res) => {
  const { id } = req.params;
  let dataGame = await videogame(id);
  try {
    dataGame ? res.send(dataGame) : res.status(404).send("Game id not found");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createGame, gamesById };
