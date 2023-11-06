import * as express from 'express';
import { getPlayer } from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.get('/:id', getPlayer);
