const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.model');

// ! MODELO

const Todo = DB.define('todo', {
   id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
   },
   title: {
      type: DataTypes.STRING,
      allowNull: false
   },
   description: {
      type: DataTypes.STRING,
   },
   isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_complete'
      // * FIELD le da el nombre que queremos que tenga en la DB, que puede ser distinto a lo que usamos en JS..  
   },
   user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
         model: Users,
         key: 'id'
      }
   },
})

module.exports = Todo;