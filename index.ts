import { connectDB, sequelize } from './src/database';
import app from './app';

if (!process.env.PORT) {
    throw new Error(
      'Missing required environment variables. Check docs for more info.',
    );
  }

const PORT = Number(process.env.PORT) || 10000;

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await connectDB();
    sequelize.sync({ force: false }).then(() => {
      console.log("✅Synced database successfully...")
    });
  });