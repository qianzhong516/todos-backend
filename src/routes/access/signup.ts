import express from 'express';
import { createUser } from '../../database/repository/UserRepo';

const router = express.Router();

router.post('/basic', async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });
  return res.status(200).send(user);
});

export default router;
