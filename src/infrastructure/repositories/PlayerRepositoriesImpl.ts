/* eslint-disable camelcase */
import { PlayerRepository } from '../../core/repositories/PlayerRepositories';
import Player from '../../core/domain/entities/Player';
import { databaseInfo } from '../database/connection';

interface PlayerMap {
  id_player: number;
  name: string | undefined;
  totalPlays: number | undefined;
  totalWins: number | undefined;
}

export class PlayerRepositoriesImpl implements PlayerRepository {
  PlayerModel = databaseInfo.PlayerModel;

  getPlayerData(player: Player): PlayerMap {
    return {
      id_player: player.getId(),
      name: player.getName(),
      totalPlays: player.getTotalPlays(),
      totalWins: player.getTotalWins()
    };
  }

  async createPlayer(player: Player): Promise<void> {
    const PlayerData = this.getPlayerData(player);

    if (this.PlayerModel != null) {
      try {
        await this.PlayerModel.create(PlayerData as any);
      } catch (error) {
        console.error('Error creating player', error);
      }
    }
  }
  async findPlayerById(id: string): Promise<any | null> {
    if (this.PlayerModel != null) {
      try {
        const foundPlayer = await this.PlayerModel.findByPk(id);
        return foundPlayer;
      } catch (error) {
        console.error('Error finding player by Id:', error);
        return null;
      }
    }
    return null;
  }

  async findAllPlayers(): Promise<any | null> {
    if (this.PlayerModel != null) {
      const allPlayers = await this.PlayerModel.findAll();
      return allPlayers;
    }
    return null;
  }

  async updatePlayer(player: Player): Promise<void> {
    if (this.PlayerModel != null) {
      try {
        await this.PlayerModel.update(player, {
          where: { id_game: player.getId() }
        });
      } catch (error) {
        console.error('Error updating player', error);
      }
    }
  }

  async deletePlayer(id: string): Promise<void> {
    if (this.PlayerModel != null) {
      await this.PlayerModel.destroy({ where: { id_player: id } });
    }
  }
}
