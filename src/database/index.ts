import { Sequelize } from 'sequelize';
import { env } from 'node:process';

export const sequelize = new Sequelize(env.DB_URI as string);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
