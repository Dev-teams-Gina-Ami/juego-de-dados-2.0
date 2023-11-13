import Player from '../domain/entities/Player';

export interface PlayerRepository {
  createPlayer(player: Player): Promise<void>;
  findPlayerById(id: number): Promise<Player | null>;
  findAllPlayers(): Promise<Player[] | null>;
  findAllAndSort(): Promise<Player[] | null>;
  updatePlayer(player: Player): Promise<void>;
  deletePlayer(id: number): Promise<void>;
  findWinner(): Promise<Player | null>;
  findLoser(): Promise<Player | null>;
}
