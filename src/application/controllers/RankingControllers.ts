import { Request, Response } from 'express';
import Player from '../../core/domain/entities/Player';
import { GameRepositoriesImpl } from '../../infrastructure/repositories/GameRepositoriesImpl';
import { PlayerRepositoriesImpl } from '../../infrastructure/repositories/PlayerRepositoriesImpl';
import Game from '../../core/domain/entities/Game';

const GameRepositories = new GameRepositoriesImpl();
const PlayerRepositories = new PlayerRepositoriesImpl();


export const getRanking = (_req: Request, res: Response) => {

}

export const getLoser = (_req: Request, res: Response) => {
    
}

export const getWiner = (_req: Request, res: Response) => {
    
}