const Users = require('../models/users.model');
const Todos = require('../models/todo.model');

class UserServices {
   static async getAll() {
      try {
         const result = await Users.findAll();
         return result;
      } catch (error) {
         throw error; //=> lanza el error...no hace falta "imprimirlo"
      }
   }

   static async getById(id) {
      try {
         const result = await Users.findByPk(id);
         return result
      } catch (error) {
         throw error;
      }
   }

   static async getWithTasks(id) {
      try {
         const result = await Users.findOne({
            where: { id },
            //* attributes: ["username"], 
            //! attributes => sirve para poder traer solo el atributo que quiero o necesito...

            //* attributes: { exclude: ["password"], },
            //! exclude => sirve para poder excluir algún campo de lo que lleva la petición...

            include: {
               model: Todos,
               as: "task",
            },
         }
         )
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async create(user) {
      try {
         const result = await Users.create(user);
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async update(field, id) {
      try {
         const result = await Users.update(field, { where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

   static async delete(id) {
      try {
         const result = await Users.destroy({ where: { id } });
         return result;
      } catch (error) {
         throw error;
      }
   }

}

module.exports = UserServices;