import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { players, playerToJSON } from '../../core/domain/use-cases/Players';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const PlayerRepositories = new PlayerRepositoriesImpl();

export const getPlayer = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers()
    .then((playersFound) => {
      const playerId: number = Number(req.params.id);
      const jsonData: Object[] = [];
      if (playersFound != null) {
        for (let i = 0; i < players.length; i++) {
          if (playerId === players[i].getId()) {
            jsonData.push(playerToJSON(players[i]));
          }
        }
      }
      res.json(jsonData);
    })
    .catch((error) => {
      console.error('Error while retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};
