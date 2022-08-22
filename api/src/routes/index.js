const { Router } = require("express");
const { apiData, dbData, apiByName, infoTotal } = require("../controllers");
const { createGame } = require("../functions/index.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", async (req, res, next) => {
  // GUARDO LOS DATOS DE LO QUE HAY EN TODA LA API
  const { name } = req.query;
  let allVideogames = await infoTotal();
  console.log(name);
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
    res.send(allVideogames);
    return;
  }
});

router.post("/videogames", createGame);

module.exports = router;
