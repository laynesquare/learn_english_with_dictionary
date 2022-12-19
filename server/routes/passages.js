import { getPassages } from '../controllers/getPassages.js';
import express from 'express';

const router = express.Router();

router.get('/', getPassages);

export default router;
