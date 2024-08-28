import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '..';

class ToDoModel extends Model<
  InferAttributes<ToDoModel>,
  InferCreationAttributes<ToDoModel>
> {
  declare title: string;
  declare description: string;
  declare isDone: boolean;
  declare isDoneAt: Date;
  //  declare author: Schema.Types.ObjectId;
  //  declare tag: Schema.Types.ObjectId;
  //  declare toDoList: Schema.Types.ObjectId;
  declare createdAt: Date;
  declare modifiedAt: Date;
  //  declare modifiedBy: Schema.Types.ObjectId;
}

export const ToDo = sequelize.define<ToDoModel>('todo', {
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
  },
  modifiedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});
