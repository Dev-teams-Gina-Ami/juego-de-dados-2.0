import * as express from 'express';
import {} from '../controllers/PlayerControllers';

export const playerRouter = express.Router();

playerRouter.get('/:id', getRolls);
playerRouter.post('/:id', doRoll);
playerRouter.delete('/:id', deleteRolls);
