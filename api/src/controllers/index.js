// Cargamos las variables de entorno
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;

// TRAER LOS 100 JUEGOS DE LA API
const apiData = async () => {
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let videogames = []; // Aca guardo los 100 juegos con las propiedades que necesito

  try {
    // Como el axios me devuelve 20 juegos y yo necesito 100, recorro hasta 5 veces el array
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url); // Me trae un array con 20 juegos
      let gamesList = response.data.results;

      // vamos a mapear para adquirir las props que necesitamos
      gamesList.map((vg) => {
        videogames.push({
          id: vg.id,
          name: vg.name,
          image: vg.background_image,
          released: vg.released,
          rating: vg.rating,
          platforms: vg.platforms?.map((el) => el.platform.name),
          genres: vg.genres?.map((el) => el.name),
        });
      });
      // Pasar a la siguiente página
      url = response.data.next;
    }
    return videogames;
  } catch (error) {
    console.log(error);
  }
};

// ENVIAR LOS 100 JUEGOS A LA BASE DE DATOS
// llamado asincrono a la base de datos
const dbData = async () => {
  try {
    return Videogame.findAll({
      //SELECT * FROM Videogame
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  } catch (e) {
    console.error(e);
  }
}; // Devuelve un array vacio, ya que en nuestra bdd no tenemos nada

const infoTotal = async () => {
  let dataDB = await dbData();
  let dataAPI = await apiData();

  const completeData = dataDB.concat(dataAPI);
  return completeData;
};

// ----------------------------------------------------------------------------------------------------------

// REQUEST POR QUERY A LA API
const apiByName = async (name) => {
  let url = `https://api.rawg.io/api/games?search=${name}&key=bc1bb0ae62664232a0e926209f30dd87`;

  try {
    const dataSearch = await axios.get(url); // {... , data: { results: ...}} llega Objeto -> data {} -> results

    let dataVgSearch = dataSearch.data.results.map((vg) => {
      return {
        id: vg.id,
        name: vg.name,
        released: vg.released,
        image: vg.background_image,
        rating: vg.rating,
        platforms: vg.platforms?.map((el) => el.platform.name), // [{platfom{}}] => [""]
        genres: vg.genres?.map((el) => el.name), // [{}] => ['']
      };
    });

    const quince = dataVgSearch.slice(0, 15);

    return quince; // array de objetos de los primeros 15
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------------------------------------------------------------------------------------

// REQUEST POR PARAMS
const idAPI = async (id) => {
  try {
    const resApi = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );

    if (resApi) {
      const idGame = await resApi.data;
      const infoGame = {
        id: idGame.id,
        name: idGame.name,
        image: idGame.background_image,
        genres: idGame.genres?.map((g) => g.name),
        description: idGame.description,
        released: idGame.released,
        rating: idGame.rating,
        platforms: idGame.platforms?.map((el) => el.platform.name),
      };
      return infoGame;
    } else {
      return "No game founded";
    }
  } catch (error) {
    console.error(error);
  }
};

const idDB = async (id) => {
  try {
    return await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

const videogame = async (id) => {
  // si el id contiene un signo - significa que lo creó el usuario, por ende lo vamos a buscar a la bdd
  if (id.includes("-")) {
    const vgDB = await idDB(id);
    return vgDB;
  } else {
    const vgAPI = await idAPI(id);
    return vgAPI;
  }
};

module.exports = { apiData, dbData, apiByName, infoTotal, videogame };
