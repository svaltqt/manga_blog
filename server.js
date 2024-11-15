const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const path = require('path');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a la base de datos y manejar errores
const startServer = async () => {
    try {
        await connectDB(); // Esperar la conexión a la base de datos
        console.log('Conexión a MongoDB exitosa');
        app.use('/api/users', userRoutes);
        app.use(errorHandler);

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
    } catch (error) {
        console.error(`Error al iniciar el servidor: ${error.message}`);
    }
};

startServer(); // Llamar a la función para iniciar el servidor
