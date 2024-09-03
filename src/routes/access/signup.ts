import express from 'express';
import { createUser } from '../../database/repository/UserRepo';
import schema from './schema';
import { validator } from '../../helpers/validator';
import { SuccessResponse } from '../../core/ApiResponse';
import { asyncHandler } from '../../helpers/asyncHandler';

const router = express.Router();

// TODO: check duplicate email
/**
 * @openapi
 * '/signup/basic':
 *  post:
 *     tags:
 *     - User Routes
 *     summary: Sign up
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - email
 *            properties:
 *              username:
 *                type: string
 *                default: johndoe
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
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
