import IResult from '../../../../core/domain/entities/IResult';

describe('IResult interface', () => {
  it('rolls debe guardarse correctamente como una array de numeros', () => {
    const result: IResult = {
      rolls: [1, 2, 3],
      win: true
    };

    expect(result).toHaveProperty('rolls');
    expect(Array.isArray(result.rolls)).toBe(true);
    expect(result.rolls.every((roll) => typeof roll === 'number')).toBe(true);
  });

  it('win debe guardarse correctamente como un boolean', () => {
    const result: IResult = {
      rolls: [4, 5, 6],
      win: false
    };

    expect(result).toHaveProperty('win');
    expect(typeof result.win).toBe('boolean');
  });
});
