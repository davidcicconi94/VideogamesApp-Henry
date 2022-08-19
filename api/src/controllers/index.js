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
    return await Videogame.findAll({
      //SELECT * FROM Videogame
      include: [
        {
          model: Genre,
          atributes: ["name"],
          throught: {
            attributes: [],
          },
        },
      ],
    });
  } catch (e) {
    console.error(e);
  }
}; // Devuelve un array vacio, ya que en nuestra bdd no tenemos nada

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

    console.log(quince);
    return quince; // array de objetos de los primeros 15
  } catch (error) {
    console.log(error);
  }
};

apiByName("gta");

module.exports = { apiData, dbData };
