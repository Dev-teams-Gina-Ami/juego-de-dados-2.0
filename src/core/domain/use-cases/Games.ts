import Game from "../entities/Game";

export let games : Game[] = [];

export function createGame(playerId: number, winnerNumber?: number){
    if(typeof winnerNumber === "number"){
        games.push(new Game(playerId, winnerNumber));
    }else{
        games.push(new Game(playerId));
    }
}

export function getLastGame() {
    return games[games.length - 1];
}

export function getLastId() {
    return games[games.length - 1].getId();
}

export function resetGamesList() {
    games = [];
}

export function gametoJSON(game: Game) : Object {
    return {
        id: game.getId(),
        playerId: game.getPlayerId(),
        hasWon: game.getHasWon(),
        winnerNumber: game.getWinnerNumber(),
        dice1_value: game.getDice1Value(),
        dice2_value: game.getDice2Value()
    }
}