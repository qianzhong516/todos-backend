import { Sequelize } from 'sequelize';
import { db } from '../config';
import * as pg from 'pg';

export const sequelize = new Sequelize({
  database: db.name,
  username: db.user,
  password: db.password,
  host: db.host,
  port: Number(db.port),
  dialect: 'postgres',
  dialectModule: pg, // This fixes the error `Please install pg package manually`
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
