import { env } from 'node:process';

// eslint-disable-next-line no-undef
module.exports = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
  },
};
