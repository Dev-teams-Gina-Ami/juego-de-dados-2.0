import Player from "../../../../core/domain/entities/Player";

describe("Player", () => {
  test("given a Player with a name passed by contructor, when its called to playsCounter method should return te correct totalPlays value.", () => {
    const name = "testname";
    const player = new Player(name);

    player.PlaysCounter();
    player.PlaysCounter();
    player.PlaysCounter();

    const expectedValue = 3;
    const result = player.toDTO().totalPlays;

    expect(result).toEqual(expectedValue);
  });

  test("given a Player with a name and 4 games and 1 win passed by contructor, when its called to calculateWinRatio method should return te correct % value.", () => {
    const name = "test";
    const player = new Player(name, 4, 1);

    const expectedValue = 25;
    const result = player.calculateWinRatio();

    expect(result).toBe(expectedValue);
  });

  test("given a Player with a name and 4 games and 1 win passed by contructor, when its called to calculateWinRatio method should return te correct % value.", () => {
    const name = "test";
    const player = new Player(name);

    const expectedValue = name;
    const result = player.toDTO().name;

    expect(result).toContain(expectedValue);
  });
});
