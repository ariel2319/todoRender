const Todos = require("../models/todo.model");
const TodosCategories = require("../models/catInTasks.model");
const Categories = require("../models/category.model");

class TodosServices {

   static async getAll() {
      try {
         const result = await Todos.findAll();
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async getById(id) {
      try {
         const result = await Todos.findByPk(id);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async create(todo) {
      try {
         const result = await Todos.create(todo);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async update(id, field) {
      try {
         const result = await Todos.update(field, { where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async delete(id) {
      try {
         const result = await Todos.destroy({ where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async getWithCategories(id) {
      try {
         const result = await Todos.findOne({
            where: { id },
            include: {
               model: TodosCategories,
               as: "tasksPivote",
               attributes: ["id"],
               include: {
                  model: Categories,
                  as: "taskPivote",
               },
            },
         });
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async withCategorires(id) {
      try {
         const result = await Todos.findOne({
            where: { id }
         })
         return result
      } catch (error) {
         throw error;
      }
   }
}

module.exports = TodosServices;