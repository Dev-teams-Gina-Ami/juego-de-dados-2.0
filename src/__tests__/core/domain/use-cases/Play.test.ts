import { roll, winOrLose } from '../../../../core/domain/use-cases/Play';

describe('Tirada de dados', () => {
  it('Tiene que generar un numero random dentro del rango especificado', () => {
    const dice = { sides: 6 };
    const result = roll(dice);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(dice.sides);
  });
});

// describe('funcion winOrLose', () => {
//   it('Debe ser true si la suma de las tiradas es equivalente al numero ganador', () => {
//     const winnerNumber = 7;
//     const roll1 = 3;
//     const roll2 = 4;

//     const result = winOrLose(roll1, roll2, winnerNumber);

//     expect(result).toBe(true);
//   });

//   it('Debe ser false si la suma de las tiradas no es equivalente al numero ganador', () => {
//     const winnerNumber = 7;
//     const roll1 = 2;
//     const roll2 = 6;

//     const result = winOrLose(roll1, roll2, winnerNumber);

//     expect(result).toBe(false);
//   });
// });
