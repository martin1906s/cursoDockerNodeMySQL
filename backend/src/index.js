require('dotenv').config();
const express = require('express');
const tareasRoutes = require('./routes/tareas.routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const corsOptions = {
    origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', tareasRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

console.log(`Port: ${port}`);
console.log(`JWT Secret: ${jwtSecret ? 'Configured' : 'Not configured'}`);
console.log(`Database URL: ${process.env.DATABASE_URL ? 'Configured' : 'Not configured'}`);
