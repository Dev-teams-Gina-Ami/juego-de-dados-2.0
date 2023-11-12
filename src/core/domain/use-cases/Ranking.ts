import Player from "../entities/Player";


export function getGlobalWinrate(players: Array<Player>) {
    let totalWinRates = 0
    for (let i = 0; i < players.length; i++) {
        const winRate = players[i].getWinRate();
        totalWinRates += winRate;
    }
    const result = totalWinRates / players.length;
    return result;
}