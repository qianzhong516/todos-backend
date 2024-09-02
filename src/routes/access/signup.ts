import express from 'express';
import { createUser } from '../../database/repository/UserRepo';
import schema from './schema';
import { validator } from '../../helpers/validator';
import { SuccessResponse } from '../../core/ApiResponse';

const router = express.Router();

// TODO: check duplicate email
// add API error & response
router.post('/basic', validator(schema.signup), async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser({ name, email });

  return new SuccessResponse('Signup Successful.', {
    user,
  }).send(res);
});

export default router;
