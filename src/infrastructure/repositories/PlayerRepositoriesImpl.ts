/* eslint-disable camelcase */
import { PlayerRepository } from '../../core/repositories/PlayerRepositories';
import Player from '../../core/domain/entities/Player';
import {
  players,
  getLastId,
  resetPlayersList
} from '../../core/domain/use-cases/Players';

interface PlayerMap {
  id_player: number;
  name: string;
  totalPlays: number;
  totalWins: number;
}

export class PlayerRepositoriesImpl implements PlayerRepository {
  static PlayerModel: any;

  getPlayerData(player: Player): PlayerMap {
    return {
      id_player: player.getId(),
      name: player.getName(),
      totalPlays: player.getTotalPlays() || 0, //valor por defecto por si no hay valor
      totalWins: player.getTotalWins() || 0 //valor por defecto por si no hay valor
    };
  }

  getPlayerClass(playerData: any) {
    let id = playerData.dataValues.id_player;
    let name = playerData.dataValues.name;
    let totalPlays = playerData.dataValues.total_plays;
    let totalWins = playerData.dataValues.total_wins;

    let playerInstance = new Player(name, totalPlays, totalWins);
    playerInstance.setId(id);

    return playerInstance;
  }

  async createPlayer(player: Player): Promise<void> {
    const PlayerData = this.getPlayerData(player);

    if (PlayerRepositoriesImpl.PlayerModel != null) {
      try {
        await PlayerRepositoriesImpl.PlayerModel.create(PlayerData as any);
      } catch (error) {
        console.error('Error creating player', error);
      }
    }
  }

  async findPlayerById(id: number): Promise<Player | null> {
    if (PlayerRepositoriesImpl.PlayerModel != null) {
      try {
        const foundPlayer =
          await PlayerRepositoriesImpl.PlayerModel.findByPk(id);
        return this.getPlayerClass(foundPlayer);
      } catch (error) {
        console.error('Error finding player by Id:', error);
        return null;
      }
    }
    return null;
  }

  async findAllPlayers(): Promise<Player[] | null> {
    if (PlayerRepositoriesImpl.PlayerModel != null) {
      resetPlayersList();
      const allPlayers = await PlayerRepositoriesImpl.PlayerModel.findAll();

      for (let i = 0; i < allPlayers.length; i++) {
        players.push(this.getPlayerClass(allPlayers[i]));
      }

      Player.setIdCounter(getLastId());

      return players;
    }

    return null;
  }

  async updatePlayer(player: Player) {
    if (PlayerRepositoriesImpl.PlayerModel != null) {
      try {
        await PlayerRepositoriesImpl.PlayerModel.update(player, {
          where: { id_game: player.getId() }
        });
      } catch (error) {
        console.error('Error updating player', error);
      }
    }
  }

  async deletePlayer(id: number): Promise<void> {
    if (PlayerRepositoriesImpl.PlayerModel != null) {
      await PlayerRepositoriesImpl.PlayerModel.destroy({
        where: { id_player: id }
      });
    }
  }
}
