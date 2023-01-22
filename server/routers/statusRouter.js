// import express & express.router
import { Router } from 'express';
import { timeLog } from '../controllers/statusController.js';

const router = Router();

// test get req for time
router.get('/time', timeLog);

// export router
export default router;