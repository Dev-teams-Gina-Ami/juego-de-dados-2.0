import { Request, Response } from 'express';
import { playMatch } from '../../core/domain/use-cases/Play'
import Player from '../../core/domain/entities/Player';
import { createGame, games, gametoJSON } from '../../core/domain/use-cases/Games';
import { GameRepositoriesImpl } from '../../infrastructure/repositories/GameRepositoriesImpl';

const GameRepositories = new GameRepositoriesImpl();

export const doRoll = (req: Request, res: Response) => {
    let playerId = req.params.id;
    //getplayer by id en bbdd
    let player: Player = new Player('player1'); //Dejalo asi de momento
    let game = playMatch(player);
    try{
        GameRepositories.add(game);
        //update player with new count;
        res.status(201).json('Roll done'); 
    }catch(error){
        console.log(error);
        res.status(500).json('Unable to store de roll');
    }

    // Incrementar IPlaysCounter y el IPlaysWins si procede.
}

export const deleteRolls = (req: Request, res: Response) => {
    GameRepositories.findAll();
    let playerId = req.body.id;
    try{
        for(let i=0; i < games.length; i++){
            if(playerId == games[i].getPlayerId()){
                games[i].setDice1Value(0);
                games[i].setDice2Value(0);
                GameRepositories.update(games[i]);
            }
        }
        res.status(204).json('Rolls borrados');
    }catch(error){
        res.status(500).json('Error al intentar borrar los rolls');
        console.log(error);
    }
}

export const getRolls = (req: Request, res: Response) => {
    GameRepositories.findAll();
    let playerId = req.body.id;
    let jsonData: Object[] = [];
    for(let i=0; i < games.length; i++){
        if(playerId == games[i].getPlayerId()){
            jsonData.push(gametoJSON(games[i]));
        }
    }
    
    res.json(jsonData);
}
