const { Router } = require("express");
const {
  createGame,
  gamesById,
  getGenres,
  getPlatforms,
  getAllGames,
} = require("../functions/index.js");

const router = Router();

router.get("/videogames", getAllGames);

router.get("/videogames/:id", gamesById);

router.post("/videogames", createGame);

router.get("/genres", getGenres);

router.get("/platforms", getPlatforms);

module.exports = router;
