import * as express from 'express';
import {
  getAllPlayers,
  createPlayer,
  deleteAllPlayers,
  updatePlayer
} from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.post('/', createPlayer);
playerRouter.put('/:id', updatePlayer);
playerRouter.get('/', getAllPlayers);
playerRouter.delete('/delete', deleteAllPlayers);
