const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String }, // Usuario aun no es requerido porque se identifica por correo
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Campo de contraseña
});

module.exports = mongoose.model('User', userSchema);
