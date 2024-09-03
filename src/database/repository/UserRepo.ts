import { User } from '../models/User';

export async function createUser(props: {
  username: string;
  email: string;
}) {
  const user = await User.create(props);
  return user.toJSON();
}

export default {
  createUser,
};
