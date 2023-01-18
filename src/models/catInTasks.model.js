const DB = require('../utils/database');

const { DataTypes } = require('sequelize');
const Todo = require('./todo.model');
const Category = require('./category.model');

const CatInTasks = DB.define('catInTasks', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   todo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Todo,
         key: 'id'
      }

   },
   category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
         model: Category,
         key: 'id'
      }
   }
});

module.exports = CatInTasks;