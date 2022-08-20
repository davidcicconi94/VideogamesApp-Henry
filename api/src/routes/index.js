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
      const gamesByNameAPI = await apiByName(name);
      const gamesByNameDB = await dbData();

      let foundGameDB = gamesByNameDB.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
      );
      let allResults = foundGameDB.concat(gamesByNameAPI);
      allResults.length
        ? res.status(200).send(allResults)
        : res.status(400).send("No existe juego con dicho nombre");
    } catch (error) {
      next(error);
    }
  } else {
    res.send(allVideogames);
    return;
  }
});

router.post("/videogames", createGame);

module.exports = router;
