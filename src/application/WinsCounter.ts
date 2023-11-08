import { PlayerRepository } from '../core/repositories/PlayerRepositories';
import IWinsCounter from '../core/domain/entities/IWinsCounter';

export class PlaysCounter {
  constructor(
    private readonly playerRepository: PlayerRepository,
    private readonly counter: IWinsCounter
  ) {}

  async exectue(playerId: number) {
    const player = await this.playerRepository.findPlayerById(playerId);

    if (!player) {
      throw new Error(`Player id not found ${playerId}`);
    }
    // falta implementar el contador
    console.log('Player', player.getTotalWins());
    await this.counter.execute(player.getTotalWins());
  }
}
