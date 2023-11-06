/* eslint-disable camelcase */
import { GameRepository } from '../../core/repositories/GameRepositories';
import Game from '../../core/domain/entities/Game';
import { databaseInfo } from '../database/connection';

interface GameMap {
  id_game: number;
  player_id: number;
  has_won: boolean;
  winnerNumber: number;
  dice1_value: number;
  dice2_value: number;
}

export class GameRepositoriesImpl implements GameRepository {
  GameModel = databaseInfo.gameModel;

  getGameData(game: Game): GameMap {
    return {
      id_game: game.getId(),
      player_id: game.getPlayerId(),
      has_won: game.getHasWon() || false, //valor por defecto por si no hay valor
      winnerNumber: game.getWinnerNumber(),
      dice1_value: game.getDice1Value() || 0, //valor por defecto por si no hay valor
      dice2_value: game.getDice2Value() || 0 //valor por defecto por si no hay valor
    };
  }

  getGameClass(gameData: any) {
    let id = gameData.dataValues.id_game;
    let playerId = gameData.dataValues.player_id;
    let hasWon = gameData.dataValues.has_won;
    let winnerNumber = gameData.dataValues.winnerNumber;
    let dice1_value = gameData.dataValues.dice1_value;
    let dice2_value = gameData.dataValues.dice2_values;

    let gameInstance = new Game(
      playerId,
      winnerNumber,
      dice1_value,
      dice2_value,
      hasWon
    );
    gameInstance.setId(id);

    return gameInstance;
  }

  async add(game: Game): Promise<void> {
    const GameData = this.getGameData(game);

    if (this.GameModel != null) {
      try {
        await this.GameModel.create(GameData as any);
      } catch (error) {
        console.error('Error adding game:', error);
      }
    }
  }

  async findById(id: number): Promise<Game | null> {
    if (this.GameModel != null) {
      try {
        const foundGame = await this.GameModel.findByPk(id);
        console.log(foundGame);
        return this.getGameClass(foundGame);
      } catch (error) {
        // Handle any potential errors
        console.error('Error finding game by ID:', error);
        return null;
      }
    }
    return null;
  }

  async findAll(): Promise<Game[] | null> {
    if (this.GameModel != null) {
      const allGames = await this.GameModel.findAll();
      console.log(allGames);
      let games: Game[] = [];

      for (let i = 0; i < allGames.length; i++) {
        games.push(this.getGameClass(allGames[i]));
      }

      console.log(games);
      return games;
    }

    return null;
  }

  async update(game: Game) {
    if (this.GameModel != null) {
      try {
        await this.GameModel.update(game, {
          where: { id_game: game.getId() }
        });
        console.log('Updated');
      } catch (error) {
        console.error('Error updating game:', error);
      }
    }
  }

  async delete(id: number): Promise<void> {
    if (this.GameModel != null) {
      await this.GameModel.destroy({ where: { id_game: id } });
    }
  }
}
