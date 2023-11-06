import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const playerRepositories = new PlayerRepositoriesImpl();

export const getPlayer = (req: Request, res: Response) => {
  let playerId = req.params.id;

  let jsonData: Object[] = [];
  for (let i = 0; i < players.length; i++) {
    if (playerId == players[i].getPlayerId()) {
      jsonData.push(playertoJSON(players[i]));
    }
  } //////////////aqui
};
