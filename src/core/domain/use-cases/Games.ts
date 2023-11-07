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
    let highestId = 0;

    if(games.length != 0){
        for (let i=0; i < games.length; i++){
            if(highestId < games[i].getId()){
                highestId = games[i].getId()
            }
        } 
    }

    return highestId;
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