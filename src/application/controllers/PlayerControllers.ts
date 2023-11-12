import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { players, playerToJSON } from '../../core/domain/use-cases/Players';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const PlayerRepositories = new PlayerRepositoriesImpl();

export const createPlayer = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers().then(async () => {
    // let name: string = req.body.name;
    console.log(req);
    console.log('00000000');
    console.log(req.body);
    // const { name } = req.body;
    let name = 'Ami';

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

export const updatePlayer = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers().then(async () => {
    let playerId: number = Number(req.params.id);
  
    // const newName = req.body;
    const newName: string = 'Val'
    const playerToUpdate = await PlayerRepositories.findPlayerById(playerId)
    console.log(playerToUpdate)
    if ( playerToUpdate != null) {
      // let playerMaped = PlayerRepositories.getPlayerData(playerToUpdate)
      // console.log(playerMaped)
      // playerMaped.name = newName;
      // console.log(playerMaped)
      const playerWithNewName = PlayerRepositories.getPlayerClass(playerToUpdate)
      console.log(playerWithNewName)
      playerWithNewName.setName(newName)
      console.log(playerWithNewName)
      try {
        await PlayerRepositories.updatePlayer(playerWithNewName)
        res.status(200)
      } catch (error) {
        console.error('Error while retrieving data:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
    return null;
})
};

export const getAllPlayers = (_req: Request, res: Response) => {
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

export const deleteAllPlayers = (_req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers().then(() => {
    try {
      for (let i = 0; i < players.length; i++) {
        PlayerRepositories.deletePlayer(i + 1)
      }
      res.status(204).json('Players borrados');
    } catch (error) {
      res.status(500).json('Error al intentar borrar los players');
      console.log(error);
    }
  })
};