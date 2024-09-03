import express from 'express';
import { createUser } from '../../database/repository/UserRepo';
import schema from './schema';
import { validator } from '../../helpers/validator';
import { SuccessResponse } from '../../core/ApiResponse';
import { asyncHandler } from '../../helpers/asyncHandler';

const router = express.Router();

// TODO: check duplicate email
router.post(
  '/basic',
  validator(schema.signup),
  asyncHandler(async (req, res, next) => {
    const { username, email } = req.body;
    const user = await createUser({ username, email });

    return new SuccessResponse('Signup Successful.', {
      user,
    }).send(res);
  })
);

export default router;
