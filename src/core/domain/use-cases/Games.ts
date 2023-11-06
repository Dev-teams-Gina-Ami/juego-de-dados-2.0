import Game from "../entities/Game";
import Player from "../entities/Player";

export let games : Game[];

export function createGame(playerId: number){
    games.push(new Game(playerId));
}