//! router de express para tener rutas dentro de nuestro proyecto de express
const { Router } = require('express');
//! importamos todas las funciones del middleware
const { getAllUsers, getUserById, getUserWithTasks, createUser, updateUser, deleteUser } = require('../controllers/users.controllers');
const authMiddleware = require('../middlewares/auth.middlewares');
// ? instancia del router..
const router = Router();


//app.get
//app.post
//app.put
//app.delete
//* en vez de utilizar app.. vamos a traerlos con el Router

//localhost:8000/users
// en la callback function tenemos el CONTROLADOR =>

router.get('/users', authMiddleware, getAllUsers);

router.get('/users/:id', authMiddleware, getUserById);
//obtener un usuario con sus tareas
router.get('/users/:id/todo', authMiddleware, getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', authMiddleware, updateUser);

router.delete('/users/:id', authMiddleware, deleteUser);

/* router.get('/users', async (req, res) => {
   try {
      //? vamos a obtener el resultado de consultar a todos los users de la DB 
      const result = await Users.findAll();
      //consulta como  =>>  SELECT * FROM users;
      res.status(200).json(result)
   } catch (error) {
      console.log(error);
   }
}); */


module.exports = router;
//export default router;