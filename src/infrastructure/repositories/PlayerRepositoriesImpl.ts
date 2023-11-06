/* eslint-disable camelcase */
import { PlayerRepository } from '../../core/repositories/PlayerRepositories';
import Player from '../../core/domain/entities/Player';
import { databaseInfo } from '../database/connection';

interface PlayerMap {
  id_player: number;
  name: string;
  totalPlays: number;
  totalWins: number;
}

export class PlayerRepositoriesImpl implements PlayerRepository {
  PlayerModel = databaseInfo.playerModel;

  getPlayerData(player: Player): PlayerMap {
    return {
      id_player: player.getId(),
      name: player.getName(),
      totalPlays: player.getTotalPlays(),
      totalWins: player.getTotalWins()
    };
  }

  getPlayerClass(playerData: any) {
    let id: playerData.dataValues.id_player;
    let name: playerData.dataValues.name;
    let totalPlays: playerData.dataValues.total_plays;
    let totalWins: playerData.dataValues.total_wins;

    let playerInstance = new Player(name, totalPlays, totalWins);
    playerInstance.setId(id);

    return playerInstance;
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
        return this.getPlayerClass(foundPlayer);
      } catch (error) {
        console.error('Error finding player by Id:', error);
        return null;
      }
    }
    return null;
  }

  async findAllPlayers(): Promise<Player[] | null> {
    if (this.PlayerModel != null) {
      const allPlayers = await this.PlayerModel.findAll();
      let players: Player[] = [];
      for (let i = 0; i < allPlayers.length; i++) {
        players.push(this.getPlayerClass(allPlayers[i]));
      }
      return players;
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
