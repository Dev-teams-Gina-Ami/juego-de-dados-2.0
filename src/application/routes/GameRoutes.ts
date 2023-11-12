import * as express from 'express';
import { doRoll, getRolls, deleteRolls } from '../controllers/GameControllers';

export const gameRouter = express.Router();

gameRouter.get('/:id', getRolls);
gameRouter.post('/:id', doRoll);
gameRouter.delete('/:id', deleteRolls);
