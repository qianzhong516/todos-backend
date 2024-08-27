import { db } from '../config';
import mongoose from 'mongoose';

// user & password need to be percent encoded. @see: https://url-shortener-one-nu-76.vercel.app/
const user = encodeURIComponent(db.user);
const password = encodeURIComponent(db.password);
const uri = `mongodb+srv://${user}:${password}@${db.host}/${db.name}?retryWrites=true&w=majority&appName=${db.appName}`;

const options = {
  autoIndex: true,
  connectTimeoutMS: 60000,
  // copied from the sample connection code on mongoDB
  serverApi: {
    version: '1' as const,
    strict: true,
    deprecationErrors: true,
  },
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log('MongoDB has been connected.');
  })
  .catch((err) => {
    console.error('MongoDB cannot be connected: ', err);
  });
