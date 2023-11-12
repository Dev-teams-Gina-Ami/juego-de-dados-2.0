import { Request, Response } from 'express';
import { playMatch } from '../../core/domain/use-cases/Play';
import Player from '../../core/domain/entities/Player';
import { games, gametoJSON } from '../../core/domain/use-cases/Games';
import { GameRepositoriesImpl } from '../../infrastructure/repositories/GameRepositoriesImpl';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';
import Game from '../../core/domain/entities/Game';

const GameRepositories = new GameRepositoriesImpl();
const PlayerRepositories = new PlayerRepositoriesImpl();

export const doRoll = (req: Request, res: Response) => {
  GameRepositories.findAll().then(() => {
    const playerId: number = Number(req.params.id);
    PlayerRepositories.findPlayerById(playerId).then((player) => {
      let game: Game; 
      if(player){
        game = playMatch(player);
        game.setPlayerId(playerId);
        try {
          GameRepositories.add(game);
          PlayerRepositories.updatePlayer(player);
          res.status(201).json('Roll done');
        } catch (error) {
          console.log(error);
          res.status(500).json('Unable to store de roll');
        }
      }
    }).catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });   
  }); 
};

export const deleteRolls = (req: Request, res: Response) => {
  GameRepositories.findAll().then(() => {
    let playerId: number = Number(req.params.id);
    try {
      for (let i = 0; i < games.length; i++) {
        if (playerId == games[i].getPlayerId()) {
          games[i].setDice1Value(0);
          games[i].setDice2Value(0);
          GameRepositories.update(games[i]);
        }
      }
      res.status(204).json('Rolls borrados');
    } catch (error) {
      res.status(500).json('Error al intentar borrar los rolls');
      console.log(error);
    }
  });
};

export const getRolls = (req: Request, res: Response) => {
  GameRepositories.findAll()
    .then((gamesFound) => {
      const playerId: number = Number(req.params.id);
      const jsonData: Object[] = [];
      if (gamesFound != null) {
        for (let i = 0; i < gamesFound.length; i++) {
          if (playerId === gamesFound[i].getPlayerId()) {
            jsonData.push(gametoJSON(games[i]));
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
