/* eslint-disable camelcase */
import { GameRepository } from '../../core/repositories/GameRepositories';
import Game from '../../core/domain/entities/Game';
import { databaseInfo } from '../database/connection';

interface GameMap {
  id_game: number;
  player_id: number;
  has_won: boolean;
  dice1_value: number;
  dice2_value: number;
}

export class GameRepositoriesImpl implements GameRepository {
  GameModel = databaseInfo.GameModel;

  getGameData(game: Game): GameMap {
    return {
      id_game: game.getId(),
      player_id: game.getPlayer().getId(),
      has_won: game.getResult()?.win || false, //valor por defecto por si no hay valor
      dice1_value: game.getResult()?.rolls[0] || 0, //valor por defecto por si no hay valor
      dice2_value: game.getResult()?.rolls[1] || 0 //valor por defecto por si no hay valor
    };
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

  async findById(id: number): Promise<any | null> {
    if (this.GameModel != null) {
      try {
        const foundGame = await this.GameModel.findByPk(id);
        return foundGame;
      } catch (error) {
        // Handle any potential errors
        console.error('Error finding game by ID:', error);
        return null;
      }
    }
    return null;
  }

  async findAll(): Promise<any | null> {
    if (this.GameModel != null) {
      const allGames = await this.GameModel.findAll();
      return allGames;
    }

    return null;
  }

  async update(game: Game) {
    if (this.GameModel != null) {
      try {
        await this.GameModel.update(game, {
          where: { id_game: game.getId() }
        });
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
