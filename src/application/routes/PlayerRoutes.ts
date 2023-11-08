import * as express from 'express';
import {
  getPlayer,
  createPlayer,
  //updatePlayer
} from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.post('/', createPlayer);
//playerRouter.put('/:id', updatePlayer);
playerRouter.get('/:id', getPlayer);
