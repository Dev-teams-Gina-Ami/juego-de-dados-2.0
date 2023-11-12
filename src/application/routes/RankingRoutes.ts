import * as express from 'express';
import { getRanking, getLoser, getWiner } from '../controllers/GameControllers';

export const rankingRouter = express.Router();

rankingRouter.get('/', getRanking);
rankingRouter.get('/loser', getLoser);
rankingRouter.get('/winner', getWiner);
