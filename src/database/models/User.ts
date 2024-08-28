import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '..';

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare name: string;
}

export const User = sequelize.define<UserModel>('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
