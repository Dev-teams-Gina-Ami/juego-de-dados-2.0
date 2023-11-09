import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { players, playerToJSON } from '../../core/domain/use-cases/Players';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const PlayerRepositories = new PlayerRepositoriesImpl();

export const createPlayer = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers().then(async () => {
    // let name: string = req.body.name;
    console.log('00000000');
    console.log(req);
    const { name } = req.body;
    // let name = 'Ami';

    console.log('----------->' + name);
    let newPlayer = new Player(name);
    try {
      await PlayerRepositories.createPlayer(newPlayer);
      res.json(newPlayer);
    } catch (error) {
      res.status(500).json('Unable to store the new player');
    }
  });
};

// export const updatePlayer = async (req: Request, res: Response) => {
//   //let playerId: number = Number(req.params.id);
//   const { id } = req.params;
//   const newInfo = req.body;

//   const newPlayerInfo = {
//       name: newInfo.name,
//       totalPlays: newInfo.total_plays,
//       totalWins: newInfo.total_wins
//     };

//     try {
//       const updatePlayer = await Player.findByIdAndUpdate??
//     } catch (error) {
//       console.error('Error while retrieving data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
// };

export const getAllPlayers = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers()
    .then((playersFound) => {
      console.log(playersFound);
      // const playerId: number = Number(req.params.id);
      const jsonData: object[] = [];
      if (playersFound != null) {
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
