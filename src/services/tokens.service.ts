import { Token } from '../types/tokens.types';
import tokenModel from '../models/tokens.models';
import { Model } from 'sequelize';

class TokensService {
  async createToken(token: Token): Promise<Model<Token>> {
    return await tokenModel.create(token);
  }

  async getById(id: number): Promise<Model<Token> | null> {
    return await tokenModel.findByPk(id);
  }
  async cleanup() {
    await tokenModel.truncate();
  }
}

export default new TokensService();
