import IDices from '../../../../core/domain/entities/IDices';

describe('IDices interface', () => {
  it('should define the "sides" property', () => {
    const dices: IDices = { sides: 6 }; //por ejemplo

    expect(dices).toHaveProperty('sides');
    expect(typeof dices.sides).toBe('number');
  });
});
