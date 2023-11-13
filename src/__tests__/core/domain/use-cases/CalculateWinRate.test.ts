import { calculateWinRate } from '../../../../core/domain/use-cases/CalculateWinRate';

describe('Calculate Win Rate', () => {
  let totalWins;
  let totalPlays;
  beforeEach(() => {
    totalWins = 0;
    totalPlays = 0;
  });

  test('La funcion calculateWinRate debe calcular el porcentaje de aciertos', () => {
    totalWins = 1;
    totalPlays = 4;
    const result = calculateWinRate(totalWins, totalPlays);

    expect(result).toBe(25);
  });

  test('La funcion debe devolver 0 si totalPlays es 0', () => {
    totalWins = 0;
    totalPlays = 0;
    const result = calculateWinRate(totalWins, totalPlays);

    expect(result).toBe(0);
  });
});
