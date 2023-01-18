const db = require('../utils/database');

const Users = require('../models/users.model');
const Todo = require('../models/todo.model');
const Categories = require('../models/category.model');
const TodosCategories = require('../models/catInTasks.model');

const users = [
   {
      username: 'Ariel',
      email: 'ariel@gmail.com',
      password: '1234'
   },
   {
      username: 'Alejandro',
      email: 'alejandro@gmail.com',
      password: '1234' 
   },
   {
      username: 'Maria',
      email: 'maria@gmail.com',
      password: '1234'
   },
   {
      username: 'Pedro',
      email: 'pedro@gmail.com',
      password: '1234'
   },
];

const todos = [
   {
      title: 'Estudiar Node',
      description: 'task n1 description',
      user_id: 1
   },
   {
      title: 'Pasear el perro',
      description: 'task n2 description',
      user_id: 1
   },
   {
      title: 'Lavar Platos',
      user_id: 3
   },
   {
      title: 'Ir al chequeo mensual',
      description: 'porque node no me deja',
      user_id: 2
   },
   {
      title: 'Jugar PS6',
      description: 'porque quiero',
      user_id: 4
   },
];

const categories = [
   { name: "personal" }, // => 1
   { name: 'educación' }, // => 2 ....
   { name: 'salud' },
   { name: 'trabajo' },
   { name: 'hogar' },
   { name: 'cocina' },
   { name: 'deporte' },
   { name: 'ocio' },
   { name: 'financiero' },
   { name: 'entretenimiento' },
];

const todosCategories = [
   { category_id: 1, todo_id: 1 },
   { category_id: 2, todo_id: 1 },
   { category_id: 4, todo_id: 1 },
   { category_id: 1, todo_id: 2 },
   { category_id: 7, todo_id: 2 },
   { category_id: 10, todo_id: 2 },
   { category_id: 3, todo_id: 2 },
   { category_id: 5, todo_id: 3 },
   { category_id: 6, todo_id: 3 },
   { category_id: 1, todo_id: 4 },
   { category_id: 3, todo_id: 4 },
];

//? todos los métodos tienen los métodos =>
//? create.. => insertar datos en la DB.. 
//? findOne... findAll.. findByPk..
//? update..
//? destroy..

db.sync({ force: true })
   .then(() => {
      console.log('Iniciando con el sembradio malicioso..');
      users.forEach((user) => Users.create(user));
      //! recorro con forEach el arreglo 'users' y cargo datos con '.create'..


      //! setTimeout se usa para hacer el .create desp de que se creen los usuarios
      setTimeout(() => {
         console.log('todos...');
         todos.forEach((todo) => Todo.create(todo));
      }, 100);

      setTimeout(() => {
         console.log('categories...');
         categories.forEach((category) => Categories.create(category));
      }, 250);

      setTimeout(() => {
         console.log('todosCategories......');
         todosCategories.forEach((tc) => TodosCategories.create(tc));
      }, 400);

   })
   // .catch((error) => console.log(error));