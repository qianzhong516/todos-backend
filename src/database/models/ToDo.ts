import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '../db';

class ToDoModel extends Model<
  InferAttributes<ToDoModel>,
  InferCreationAttributes<ToDoModel>
> {
  declare title: string;
  declare description: string;
  declare isDone: boolean;
  declare isDoneAt: Date;
  declare createdAt: Date;
  declare modifiedAt: Date;
}

export const ToDo = sequelize.define<ToDoModel>(
  'todo',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isDoneAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    modifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);
