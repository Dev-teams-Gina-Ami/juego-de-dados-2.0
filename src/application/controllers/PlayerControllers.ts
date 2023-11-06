import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const playerRepositories = new PlayerRepositoriesImpl();

export const algo = (req: Request, res: Response) => {
  let playerId = req.params.id;

  let player: Player = new Player('player1');
  let player;
};
