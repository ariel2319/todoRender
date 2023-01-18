// ! config basic del server
// 1 => importar express
const express = require('express');
// ?  traemos la DB exportada
const db = require('./utils/database');
//? traemos el initModels
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todo = require('./models/todo.model');
const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.routes');
/* const authRoutes = require('./routes/auth.routes'); */
const cors = require('cors');

require("dotenv").config();

console.log(process.env.PORT)
// 2 => crear una instancia de express
const app = express();
//? middleware de express para convertir todo JSON en objeto
//* app.use => lo utilizamos para escuchar TODOS los llamados
app.use(express.json());
app.use(cors()); // cors=> nuestro back ya puede recibir peticiones de todos lados y todo mundo..

const PORT = process.env.PORT;

//probando la conexión con la BD...
db.authenticate()
   .then(() => console.log(' *** Successfull authentication! :D *** '))
   .catch((error) => console.log(error))

//! ejecutamos la función del initModels..así como si nada
initModels();

//* vamos a usar el método sync de nuestra db
db.sync({ force: false }) //devuelve una promesa
   //! alter => si hay cambios en nuestros modelos, permite actualizar la DB en psql..
   .then(() => console.log('*** synchronized DB.. ***'))
   .catch((error) => console.log(error))

// ! consulta get a la ruta raíz..responde con el RES..
app.get('/', (req, res) => {
   res.status(200) //podemos definir le código del estado de la res
      .json({ message: 'Welcome to server of Arry' })
})

app.use('/api/v1', userRoutes);
app.use('/api/v1', todosRoutes);
app.use('/api/v1', authRoutes);
/* app.use('/api/v1', authRoutes); */

//* definir las rutas de nuestros endpoints (de ahora adelante ep)
//* todas las consultas de usuarios
//* localhost:8000/users   ==> todo para usuarios
//* localhost:8000/todos ==> todo para tareas


//! GET a /users
/* app.get('/users', async (req, res) => {
   try {
      //? vamos a obtener el resultado de consultar a todos los users de la DB 
      const result = await Users.findAll();
      //consulta como  =>>  SELECT * FROM users;
      res.status(200).json(result)
   } catch (error) {
      console.log(error);
   }
}) */
//* GET a /todo
/* app.get('/todo', async (req, res) => {
   try {
      //? vamos a obtener el resultado de consultar a todos los users de la DB 
      const result = await Todo.findAll();
      //consulta como  =>>  SELECT * FROM users;
      res.status(200).json(result)
   } catch (error) {
      console.log(error);
   }
}) */

/* ****************************************************************** */

/* //! GET => obtener un usuario sabiendo su id
app.get('/users/:id', async (req, res) => {
   try {
      console.log(req.params);
      const { id } = req.params;
      const result = await Users.findByPk(id);
      res.status(200).json(result);
   } catch (error) {
      console.log(error)
   }
}) */
//* GET =>> obtenr task por id
/* app.get('/todo/:id', async (req, res) => {
   try {
      console.log(req.params);
      const { id } = req.params;
      const result = await Todo.findByPk(id);
      res.status(200).json(result);
   } catch (error) {
      console.log(error)
   }
}) */

/* ****************************************************************** */

//! GET => obtener un usuario por username
/* app.get('/users/username/:username', async (req, res) => {
   try {
      const { username } = req.params;
      const result = await Users.findOne({ where: { username } });
      // consulta como =>> SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
}) */
//* GET =>> obtener task por title
/* app.get('/todo/title/:title', async (req, res) => {
   try {
      const { title } = req.params;
      const result = await Todo.findOne({ where: { title } });
      // consulta como =>> SELECT * FROM users WHERE username = iannacus
      res.status(200).json(result);
   } catch (error) {
      console.log(error);
   }
}) */
/* ****************************************************************** */

//! POST => Creando usuario
/* app.post('/users', async (req, res) => {
   try {
      const user = req.body;
      const result = await Users.create(user);
      res.status(201).json(result);
   } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
   }
}) */
//* POST =>> creando tasks..
/* app.post('/todo', async (req, res) => {
   try {
      const task = req.body;
      const result = await Todo.create(task);
      res.status(201).json(result);
   } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
   }
}) */

/* ****************************************************************** */

//! PUT => actualizar un usuario, solo podemos cambiar password
/* app.put('/users/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const field = req.body;
      const result = await Users.update(field, {
         where: { id },
      });
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
   }
}) */
//* PUT =>> actualizar una task =>> title, description, isComplete 
/* app.put('/todo/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const field = req.body;
      const result = await Todo.update(field, {
         where: { id },
      });
      res.status(200).json(result);
   } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
   }
}) */

/* ****************************************************************** */

//! DELETE => eliminar un user por ID
/* app.delete('/users', async (req, res) => {
   try {
      const { id } = req.params;
      const result = await Users.destroy({
         where: { id }
      });
      res.status(200).json(result);
   } catch (error) {

      res.status(400).json(error.message);
      console.log(error);
   }
}) */

/* ****************************************************************** */

// ! la app va a estar escuchando en este puerto
app.listen(PORT, () => {
   console.log(`Server is running in PORT ${PORT}`)
})