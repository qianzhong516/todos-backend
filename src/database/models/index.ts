import { ToDo } from './ToDo';
import { User } from './User';

User.hasMany(ToDo);
ToDo.belongsTo(User, {
  as: 'author',
  foreignKey: { name: 'authorId', allowNull: false },
});
ToDo.belongsTo(User, {
  as: 'modified_by',
  foreignKey: { name: 'modifiedBy', allowNull: true },
});
