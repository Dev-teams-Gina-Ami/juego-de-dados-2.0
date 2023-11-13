import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { players, playerToJSON } from '../../core/domain/use-cases/Players';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';

const PlayerRepositories = new PlayerRepositoriesImpl();

export const createPlayer = (req: Request, res: Response) => {
  PlayerRepositories.findAllPlayers().then(async (players: Player[] | null) => {
    let name: string;
    let found: Player | undefined;

    if(req.body.name != null){
      name = req.body.name;
    }else{
      name = 'Anonim';
    }
    
    if(players != null){
      found = players.find((player) => player.getName() == name);
    }

    if(found && found.getName() != 'Anonim'){
      res.status(500).json("Name already exists");
    }else{
      let newPlayer = new Player(name);
      try {
        await PlayerRepositories.createPlayer(newPlayer);
        res.json(newPlayer);
      } catch (error) {
        res.status(500).json('Unable to store the new player');
      }
    }
  });
};

export const updatePlayer = async (req: Request, res: Response) => {
  try {
    const players = await PlayerRepositories.findAllPlayers();
    const playerId: number = Number(req.params.id);
    const newName: string = req.body.name;
    let found: Player | undefined;

    const playerToUpdate = await PlayerRepositories.findPlayerById(playerId);

    if(players != null){
      found = players.find((player) => player.getName() == newName);
    }

    if(found){
      res.status(500).json("Name already exists");
    }else{
      if (playerToUpdate) {
        playerToUpdate.setName(newName);
        await PlayerRepositories.updatePlayer(playerToUpdate);
        res.status(200).send("Player updated successfully");
      } else {
        res.status(404).json({ error: 'Player not found' });
      }
    } 
  } catch (error) {
    console.error('Error while updating player:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


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