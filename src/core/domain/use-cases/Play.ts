
import Game from "../entities/Game";
import IDices from "../entities/IDices";
import Player from "../entities/Player";
import { createGame, getLastGame } from "./Games";

export function roll(dice: IDices): number {
  return Math.floor(Math.random() * (dice.sides - 1) + 1);
}

export function winOrLose(
    game: Game,
  ): void {
    if (game.getDice1Value() + game.getDice2Value() == game.getWinnerNumber()) {
      game.setHasWon(true);
    } else {
      game.setHasWon(false);
    }
  }

export function doBothRolls(game: Game) : void{
  let dice: IDices = {sides: 6};
  game.setDice1Value(roll(dice));
  game.setDice2Value(roll(dice));
}

export function playMatch(player: Player) : Game{
  createGame(player.getId());
  let game = getLastGame();
  doBothRolls(game);
  winOrLose(game);
  
  if(player.getTotalPlays() != undefined){
    player.setTotalPlays(player.getTotalPlays() + 1);
  }
  if(game.getHasWon()){
    player.setTotalWins(player.getTotalWins() + 1);
  }
  
  return game;
}
