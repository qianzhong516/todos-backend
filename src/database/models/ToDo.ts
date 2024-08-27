import { model, Schema, Types } from 'mongoose';

const DOCUMENT_NAME = 'ToDo';
const COLLECTION_NAME = 'todos';

interface ToDo {
  _id: Types.ObjectId;
  title: string;
  description: string;
  isDone: Schema.Types.Boolean;
  isDoneAt: Schema.Types.Date;
  author: Schema.Types.ObjectId;
  tag: Schema.Types.ObjectId;
  toDoList: Schema.Types.ObjectId;
  createdAt: Schema.Types.Date;
  modifiedAt: Schema.Types.Date;
  modifiedBy: Schema.Types.ObjectId;
}

const schema = new Schema<ToDo>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  isDone: { type: Boolean, required: true, default: false },
  isDoneAt: { type: Date, required: false },
  author: { type: Types.ObjectId, required: true },
  tag: { type: Types.ObjectId, required: false },
  toDoList: { type: Types.ObjectId, required: true },
  createdAt: { type: Date, required: true },
  modifiedAt: { type: Date, required: false },
  modifiedBy: { type: Types.ObjectId, required: false },
});

export const ToDoModel = model<ToDo>(
  DOCUMENT_NAME,
  schema,
  COLLECTION_NAME
);
