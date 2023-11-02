import Player from '../../core/domain/entities/Player';
import PlayerRepository from '../../core/repositories/PlayerRepositories';

// falta implementar el modelo de Player

// export default class PlayerRepositoryImpl implements PlayerRepository {
//   async createPlayer(newPlayer: Player): Promise<void> {
//     await PlayerModel.create(newPlayer);
//   }

//   async findPlayerById(id: string): Promise<Player | null> {
//     await PlayerModel.findById(id);
//   }

//   async findAllPlayers(): Promise<Player[]> {
//     await PlayerModel.find();
//   }

//   async deletePlayer(id: string): Promise<void> {
//     await PlayerModel.findByidAndDelete(id);
//   }

//   playsCounter(id: string): Promise<number> {}
// }