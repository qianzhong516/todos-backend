import z from 'zod';

export default {
  signup: z.object({
    username: z
      .string({
        required_error: 'Username is required',
      })
      .min(3)
      .max(30),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email(),
  }),
};
