// import express & express.router
import { Router } from 'express';
import { 
    apiTest, 
    getRepo, 
    getContributors, 
    getUser 
} from '../controllers/apiController.js';

const router = Router();

router.get('/test', apiTest);

router.get('/repo', getRepo);

router.get('/contributors', getContributors);

router.get('/user/:username', getUser);

export default router;