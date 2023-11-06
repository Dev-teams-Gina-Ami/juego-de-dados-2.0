import Player from '../../../../core/domain/entities/Player';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player('Alice');
  });

  test('El constructor inicializa las propiedades correctamente', () => {
    expect(player.getId()).toBeDefined();
    expect(player.getCreationDate()).toBeUndefined();
    expect(player.getTotalWins()).toBe(0);
    expect(player.getTotalPlays()).toBe(0);
  });

  test('setTotalPlays debe introducir el valor correcto', () => {
    player.setTotalPlays(5);
    expect(player.getTotalPlays()).toBe(5);
  });

  test('setTotalWins debe introducir el valor correcto', () => {
    player.setTotalWins(7);
    expect(player.getTotalWins()).toBe(7);
  });
});
