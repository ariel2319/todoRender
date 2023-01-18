// ! aquí vamos a crear la base de datos o la conexión
// importamos sequelize..
const { Sequelize } = require('sequelize');

require("dotenv").config(); //! =>así usamos el dotenv..previamente configurado

// ? creamos una instancia con parámetros de configuración de nuestra base de datos
// ? necesitamos un Objeto de configuración => credenciales de mi base de datos
const db = new Sequelize({
   database: process.env.DB_NAME,
   username: process.env.DB_USER,
   host: process.env.DB_HOST, // ? => 127.0.0.1 = localhost
   port: process.env.DB_PORT, // ! puerto de la DB del psql
   password: process.env.DB_PASSWORD, //! pass de la DB del psql
   dialect: 'postgres', //! tipo DB que estamos usando => postgres 
   logging: false,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
});
// ! exporto la instancia de 'db' para que la pueda leer el resto de la app
module.exports = db;


//una vez requerido el dotenv..cambiamos los valores de nuestra configuración por las variables del .env........