const DB = require('../utils/database');

const { DataTypes } = require('sequelize');

const Category = DB.define('category', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
},
   {
      timestamps: false,
      // ! sirve para NO CREAR las marcas de tiempo
   });

module.exports = Category;