import './models'; // initialize models
import { sequelize } from './db';

sequelize
  .authenticate()
  .then(() => {
    console.log(
      'Database connection has been established successfully.'
    );
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
