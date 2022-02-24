import express from 'express';
import bodyParser from "body-parser"; // take in incoming post request bodies

import usersRoutes from './routes/users.js';

const app = express(); // application initialization 
const PORT = 5000; // port for backend 

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) =>res.send('Hello '));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));