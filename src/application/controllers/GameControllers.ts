import { Request, Response } from 'express';
import IDices from '../../core/domain/entities/IDices';
import { doBothRolls } from '../../core/domain/use-cases/Play'
import Player from '../../core/domain/entities/Player';
import { createGame, games } from '../../core/domain/use-cases/Games';

export const doRoll = (req: Request, res: Response) => {
    let playerId = req.params.id;
    //aqui findplayerbyId de bbdd y deberia traducirse en un objeto player, quizá si que tendré que crear un "conversor".
    let player: Player = new Player('player1'); //Dejalo asi de momento
    //createGame(player);
    doBothRolls(games[games.length - 1]);
}

export const deleteRolls = (req: Request, res: Response) => {
    //findAll
    let playerId = req.body.id;
    //Filtrar qué juegos son del jugador con id=X
}

export const getRolls = (req: Request, res: Response) => {
    //findAll
    
    let playerId = req.body.id;

}