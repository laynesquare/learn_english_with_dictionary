import express from 'express';
import { getPassages } from '../controllers/getPassages.js';

const router = express.Router();

router.get('/', getPassages);

export default router;
