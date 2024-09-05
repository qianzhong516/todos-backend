import { Sequelize } from 'sequelize';
import { db } from '../config';
import * as pg from 'pg';
import path from 'path';

let options = {};
if (process.env.NODE_ENV === 'development') {
  options = {
    database: db.name,
    username: db.user,
    password: db.password,
    host: db.host,
    port: Number(db.port),
    dialect: 'postgres',
    dialectModule: pg, // This fixes the error `Please install pg package manually`
  };
} else if (process.env.NODE_ENV === 'production') {
  options = {
    database: db.name,
    username: db.user,
    password: db.password,
    host: db.host,
    port: Number(db.port),
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
    database: db.name,
    dialect: 'sqlite',
    storage: path.resolve(process.cwd(), 'testdb.sqlite'), // or ':memory:'
  };
}

export const sequelize = new Sequelize(options);
