import IPlaysCounter from '../core/domain/entities/IPlaysCounter';

export class FakeCounter implements IPlaysCounter {
  async execute(totalPlays: number): Promise<void> {
    const newPlays = totalPlays + 1;
    console.log(`contando ${totalPlays} +1 = ${newPlays}`);
  }
}
