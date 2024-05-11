import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/index';
import { Token } from '../types/tokens.types';

class TokenModel extends Model<Token> {}
TokenModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 3],
        isUppercase: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'tokens', sequelize },
);

export default TokenModel;
