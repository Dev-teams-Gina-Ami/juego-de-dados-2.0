import Player from '../domain/entities/Player';

export default interface PlayerRepository {
  createPlayer(newPlayer: Player): Promise<void>;
  findPlayerById(id: string): Promise<Player | null>;
  findAllPlayers(): Promise<Player[]>;
  deletePlayer(id: string): Promise<void>;
  playsCounter(id: string): Promise<number>;
  winsCounter(id: string): Promise<number>;
}

