import Player from "../entities/Player";

export let players: Player[] = [];

export function createPlayer(name: string) {
    players.push(new Player(name));
}

export function getLastPlayer() {
    return players[players.length - 1];
}

export function getLastId() {
    let highestId = 0;

    if(players.length != 0){
        for (let i = 0; i < players.length; i++) {
            if(highestId < players[i].getId()){
                highestId = players[i].getId()
            }
        }
    }

    return highestId;
}

export function resetPlayersList() {
    players = [];
}

export function playerToJSON(player: Player) : Object {
    return {
        id: player.getId(),
        name: player.getName(),
        totalPlays: player.getTotalPlays(),
        totalWins: player.getTotalWins(),
        creationDate: player.getCreationDate(),
    }
}