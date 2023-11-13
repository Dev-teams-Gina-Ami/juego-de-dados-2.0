import * as express from 'express';
import {
  getRanking,
  getLoser,
  getWinner
} from '../controllers/RankingControllers';

export const rankingRouter = express.Router();

rankingRouter.get('/', getRanking);
rankingRouter.get('/loser', getLoser);
rankingRouter.get('/winner', getWinner);
