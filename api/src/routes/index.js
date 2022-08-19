const { Router } = require("express");
const { apiData, dbData } = require("../controllers");
const { createGame } = require("../functions/index.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", async (req, res) => {
  // GUARDO LOS DATOS DE LO QUE HAY EN TODA LA API
  const apiGames = await apiData(); // [100 games]

  const dbGames = await dbData(); // []

  const finalData = [...apiGames, ...dbGames];
  res.json(finalData);
});

router.post("/videogames", createGame);

module.exports = router;
