import signup from './access/signup';
import express from 'express';

const router = express.Router();

router.use('/signup', signup);

export default router;
