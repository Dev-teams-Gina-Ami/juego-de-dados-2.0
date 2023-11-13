import { Request, Response } from 'express';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';
import { playerToJSON, players } from '../../core/domain/use-cases/Players';
import { getGlobalWinrate } from '../../core/domain/use-cases/Ranking';

const PlayerRepositories = new PlayerRepositoriesImpl();

export const getRanking = (_req: Request, res: Response) => {
  PlayerRepositories.findAllAndSort()
    .then((playersFound) => {
      console.log(playersFound);

      const jsonData: object[] = [];
      if (playersFound != null) {
        const GlobalWinrate = getGlobalWinrate(playersFound);
        jsonData.push({ 'Global Winrate': GlobalWinrate });
        for (let i = 0; i < players.length; i++) {
          jsonData.push(playerToJSON(players[i]));
        }
      }
      res.json(jsonData);
    })
    .catch((error) => {
      console.error('Error while retrieving data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

export const getLoser = (_req: Request, res: Response) => {
  PlayerRepositories.findLoser().then((loser) => {
    if (loser != null) {
      res.json(loser);
    }
    return null;
  });
};

export const getWinner = (_req: Request, res: Response) => {
  PlayerRepositories.findWinner().then((winner) => {
    if (winner != null) {
      res.json(winner);
    }
    return null;
  });
};
