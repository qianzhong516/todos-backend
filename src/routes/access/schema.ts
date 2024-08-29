import z from 'zod';

export default {
  signup: z.object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
  }),
};
