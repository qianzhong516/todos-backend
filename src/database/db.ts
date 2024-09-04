import { Sequelize } from 'sequelize';
import { db } from '../config';
import * as pg from 'pg';
import path from 'path';

// TODO: improve test env connection where some info is not needed
const commonOptions = {
  database: db.name,
  username: db.user,
  password: db.password,
  host: db.host,
  port: Number(db.port),
} as const;

let options = {};
if (process.env.NODE_ENV === 'development') {
  options = {
    dialect: 'postgres',
    dialectModule: pg, // This fixes the error `Please install pg package manually`
  };
} else if (process.env.NODE_ENV === 'production') {
  options = {
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  } as const;
} else if (process.env.NODE_ENV === 'test') {
  options = {
    dialect: 'sqlite',
    storage: path.resolve(process.cwd(), 'testdb.sqlite'), // or ':memory:'
  };
}

export const sequelize = new Sequelize({
  ...commonOptions,
  ...options,
});
