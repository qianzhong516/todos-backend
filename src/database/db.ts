import { Sequelize } from 'sequelize';
import { db } from '../config';
import * as pg from 'pg';

const commonOptions = {
  database: db.name,
  username: db.user,
  password: db.password,
  host: db.host,
  port: Number(db.port),
  dialect: 'postgres',
  dialectModule: pg, // This fixes the error `Please install pg package manually`
} as const;

let options = {};
if (process.env.NODE_ENV === 'production') {
  options = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  } as const;
}

export const sequelize = new Sequelize({
  ...commonOptions,
  ...options,
});
