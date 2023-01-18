const { Router } = require('express');
const { getTaskById, getAllTasks, updateTask, createTask, deleteTask, getTodosWithCategories } = require('../controllers/todos.controllers');

const authMiddleware = require('../middlewares/auth.middlewares');
//* => importamos el midd para proteger rutas

const router = Router();

router.get('/todo', authMiddleware, getAllTasks); 
//! => ambos son midd, pero se ejecutan de izq a derecha..
router.get('/todo/:id', getTaskById);
router.get('/todo/:id/categories', authMiddleware, getTodosWithCategories);

router.post('/todo', authMiddleware, createTask);

router.put('/todo/:id', authMiddleware, updateTask);

router.delete('/todo/:id', authMiddleware, deleteTask);

module.exports = router;