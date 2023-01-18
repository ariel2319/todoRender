// ! importamos todos los modelos creados (tablas)
const Users = require('./users.model');
const Todo = require('./todo.model');
const Category = require('./category.model');
const CatInTasks = require('./catInTasks.model');

const initModels = () => {
   //Users;
   //Todo;
   //Category;
   //CatInTasks;

   // ! Relaciones =>> inicializamos los modelos y los relacionamos
   // hasOne =>> indica que tiene 1 tarea
   // hasMany =>> indica que tiene Muchas tareas
   // belongsTo =>> pertenece a...

   //* relación de 1 - M => Users - Todo
   Todo.belongsTo(Users, { as: 'author', foreignKey: 'user_id' });
   Users.hasMany(Todo, { as: 'task', foreignKey: 'user_id' });

   //* relación de 1 - M => Todo - cat_in_tasks
   CatInTasks.belongsTo(Todo, { as: 'task', foreignKey: 'todo_id' });
   Todo.hasMany(CatInTasks, { as: 'tasksPivote', foreignKey: 'todo_id' });

   //* relación de M - 1 => cat_in_tasks - Category
   CatInTasks.belongsTo(Category, { as: 'taskPivote', foreignKey: 'category_id' })
   Category.hasMany(CatInTasks, { as: 'categoriesPivote', foreignKey: 'category_id' })
};

module.exports = initModels;