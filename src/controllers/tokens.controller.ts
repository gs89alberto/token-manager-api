import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import tokensService from '../services/tokens.service';
import { HttpException } from '../common/exception';

class TokensController {
  async getTokenById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const token = await tokensService.getById(parseInt(id));
    if (token) {
      res.status(200).send(token);
    } else {
      const error = new HttpException(404, 'Token not found');
      next(error);
    }
  }

  async createToken(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, ticker, description } = req.body;
      const token = await tokensService.createToken({
        name,
        ticker,
        description,
      });
      res.status(201).json(token);
    } catch (error) {
      next(error);
    }
  }
}

export default new TokensController();
