import '../database/models'; // initialize models
import { sequelize } from '../database/db';

sequelize.sync({ force: true });
