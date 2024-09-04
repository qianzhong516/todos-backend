import './models'; // initialize models
import { sequelize } from './db';

// TODO: call sequelize.sync() if the database does not exist.
sequelize
  .authenticate()
  .then(() => {
    console.log(
      'Database connection has been established successfully.'
    );
    sequelize.sync({ force: true });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
