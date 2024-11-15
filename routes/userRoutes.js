const express = require('express');
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers); // Obtener todos los usuarios
router.post('/', createUser); // Crear un usuario
router.get('/:id', getUserById); // Obtener un usuario por ID
router.put('/:id', updateUser); // Actualizar un usuario por ID
router.delete('/:id', deleteUser); // Eliminar un usuario por ID

module.exports = router;
