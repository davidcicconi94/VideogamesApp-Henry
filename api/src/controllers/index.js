// Cargamos las variables de entorno
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db.js");

const axios = require("axios");
// const Videogame = require("../models/Videogame");

// TRAER LOS 100 JUEGOS DE LA API
const apiData = async (req, res) => {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let videogames = []; // Aca guardo los 100 juegos con las propiedades que necesito

  // Como el axios me devuelve 20 juegos y yo necesito 100, recorro hasta 5 veces el array
  for (let i = 0; i < 5; i++) {
    const response = await axios.get(url); // Me trae un array con 20 juegos
    let gamesList = response.data.results;

    // vamos a mapear para adquirir las props que necesitamos
    gamesList.map((vg) => {
      videogames.push({
        id: vg.id,
        name: vg.name,
        description: vg.description,
        released: vg.released,
        rating: vg.rating,
        platforms: vg.platforms?.map((el) => el.platform.name),
        genres: vg.genres?.map((el) => el.name),
      });
    });
  }
  console.log(videogames.length);
  return videogames;
};

// REQUEST PARA TRAERME 100 VIDEOJUEGOS

module.exports = { apiData };
