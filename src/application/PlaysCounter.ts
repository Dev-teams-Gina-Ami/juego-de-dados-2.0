import { PlayerRepository } from '../core/repositories/PlayerRepositories';
import IPlaysCounter from '../core/domain/entities/IPlaysCounter';

export class PlaysCounter {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly counter: IPlaysCounter
  ) {}

  async exectue(playerId: number) {
    const player = await this.playerRepository.findPlayerById(playerId);

    if (!player) {
      throw new Error(`Player id not found ${playerId}`);
    }
    // falta implementar el contador
    console.log('Player', player.getTotalPlays());
    await this.counter.execute(player.getTotalPlays());
  }
}
