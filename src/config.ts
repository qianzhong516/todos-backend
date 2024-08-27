export const PORT = process.env.PORT;

export const db = {
  name: process.env.DB_NAME || '',
  appName: process.env.DB_APP_NAME || '',
  user: process.env.DB_USER || '',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || '',
  password: process.env.DB_PASSWORD || '',
};
