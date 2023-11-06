import Player from '../domain/entities/Player';

export interface PlayerRepository {
  createPlayer(newPlayer: Player): Promise<void>;
  findPlayerById(id: string): Promise<any | null>; //<Player | null>;
  findAllPlayers(): Promise<any | null>; //<Player[]>;
  updatePlayer(player: Player): Promise<void>;
  deletePlayer(id: string): Promise<void>;
}
