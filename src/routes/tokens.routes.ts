import { CommonRoutesConfig } from '../common/common.routes.config';
import { notAllowedHandler } from '../middleware/not-allowed.middleware';
import { Application } from 'express';
import { createTokenValidator, getTokenValidator } from '../utils/validations.utils';
import tokensController from '../controllers/tokens.controller';
import validate from '../middleware/validate.middleware';

export class TokensRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'TokensRoutes');
  }

  configureRoutes(): Application {
    this.app.get(`/tokens/:id`, validate(getTokenValidator), tokensController.getTokenById);

    this.app.post(`/tokens/`, validate(createTokenValidator), tokensController.createToken);

    this.app.route([`/tokens`, `/tokens/:id`]).all(notAllowedHandler);

    return this.app;
  }
}
