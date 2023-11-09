import * as express from 'express';
import {
  getAllPlayers,
  createPlayer
  //updatePlayer
} from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.post('/', createPlayer);
//playerRouter.put('/:id', updatePlayer);
playerRouter.get('/', getAllPlayers);
