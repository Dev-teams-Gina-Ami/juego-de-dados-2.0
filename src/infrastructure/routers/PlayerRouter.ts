import express from 'express';
import { Request, Response, NextFunction } from 'express';
// import { MPlayer } from '../../_domain/repositories/MPlayer';

import { playerController } from './dependencies';

export const playerRouter = express.Router();

playerRouter.get('/hello');

playerRouter.post(
  '/:id/counter',
  playerController.execute.bind(playerController)
);

// playerRouter.get('/:id', (req: Request, res: Response, next: NextFunction) => {
//   console.log(req.params);
//   const { id } = req.params;
//   MPlayer.find({ id: id })
//     .then((player) => {
//       if (player) {
//         return res.json(player);
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err: Error) => {
//       next(err);
//     });
// });
