// Cargamos las variables de entorno
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;
const {
  totalData,
  videogame,
  apiData,
  infoTotal,
  apiByName,
  dbData,
} = require("../controllers/index.js");

const getAllGames = async (req, res, next) => {
  const { name } = req.query;
  let videogames = await infoTotal();
  if (name) {
    try {
      const foundGamesAPI = await apiByName(name);
      const gamesByNameDB = await dbData();
      let foundGamesDB = gamesByNameDB.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      let allResults = foundGamesDB.concat(foundGamesAPI);
      allResults.length
        ? res.status(200).send(allResults.slice(0, 15))
        : res.status(400).send("No hay un videojuego con dicho nombre");
    } catch (err) {
      next(err);
    }
  } else {
    res.send(videogames);
    return;
  }
};

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
    res.status(400).json({ error: error.message });
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

const getGenres = async (req, res) => {
  const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const arrGenr = response.data.results;

    const apiGenres = arrGenr.map((el) => el.name); // ['action' , 'indie' , etc]
    // console.log("Estos son los Genres de la API:", apiGenres);

    // Guardo los genres que traje de la API a la base de datos
    apiGenres.map((el) =>
      Genre.findOrCreate({
        where: { name: el },
      })
    );

    const getAllGenresDB = await Genre.findAll();
    res.json(getAllGenresDB);
  } catch (error) {
    console.error(error);
  }
};

const getPlatforms = async (req, res) => {
  try {
    const allGames = await apiData();
    const platforms = [];

    allGames.map((vg) =>
      vg.platforms.map((plat) => {
        if (!platforms.includes(plat)) {
          platforms.push(plat);
        }
      })
    );

    platforms.length
      ? res.status(200).json(platforms)
      : res.status(404).send("Error");
  } catch (error) {}
};

module.exports = {
  createGame,
  gamesById,
  getGenres,
  getPlatforms,
  getAllGames,
};
