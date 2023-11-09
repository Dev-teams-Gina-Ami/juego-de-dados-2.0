import * as express from 'express';
import {
  getAllPlayers,
  createPlayer,
  sayHi
  //updatePlayer
} from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.get('/', sayHi);
playerRouter.post('/', createPlayer);
//playerRouter.put('/:id', updatePlayer);
playerRouter.get('/all', getAllPlayers);
