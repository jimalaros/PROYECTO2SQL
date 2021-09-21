import sequelize from './database';
import express from 'express';
import { QueryTypes } from 'sequelize';

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(express.json());

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});


