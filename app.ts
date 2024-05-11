import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { notFoundHandler } from './src/middleware/not-found.middleware';
import { CommonRoutesConfig } from './src/common/common.routes.config';
import { TokensRoutes } from './src/routes/tokens.routes';
import errorHandler from './src/middleware/error.middleware';

const app = express();
const routes: Array<CommonRoutesConfig> = [];

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.set('json spaces', 2);
app.use(helmet());

app.use((_req, res, next) => {
  res.contentType('application/json; charset=utf-8');
  next();
});


routes.push(new TokensRoutes(app));

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
