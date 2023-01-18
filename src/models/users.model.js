//? tenemos una instancia para la conexión de la DB
const DB = require('../utils/database')

// necesitamos los tipos de datos de sequelize
//? destructuramos los tipos de datos del sequelize..
const { DataTypes } = require('sequelize');

//! definir el MODELO de usuarios
// => MODELOS se definen con Mayus

//? define => método que acepta 2 parámetros 
// 1ro => nombre de la tabla
// 2do => atributos de la tabla
const Users = DB.define('users', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER, //!para utilizar el tipo de datos de sequelize
      autoIncrement: true,
      allowNull: false
   },
   username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
         isEmail: true
      }
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

module.exports = Users;