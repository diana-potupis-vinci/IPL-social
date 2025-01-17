const passwordChecker = require("../passwordChecker");

describe("passwordChecker", () => {
  test("Il doit contenir au moins 8 charactères", () => {
    const result = passwordChecker("1234567*");
    expect(result).toBe(false);
  });

  test("Il doit contenir au moins 8 charactères", () => {
    const result = passwordChecker("123478");
    expect(result).toBe(false);
  });

  test("b.	Il doit contenir au moins un charactère spécial.", () => {
    const result = passwordChecker("123456@8");
    expect(result).toBe(false);
  });

  test("b.	Il doit contenir au moins un charactère spécial.", () => {
    const result = passwordChecker("12345678");
    expect(result).toBe(false);
  });

  test("b.	Il doit contenir au moins un charactère spécial.", () => {
    const result = passwordChecker("12r*5678");
    expect(result).toBe(true);
  });

  test("b.	Il doit contenir au moins un charactère spécial.", () => {
    const result = passwordChecker("P2r*5678");
    expect(result).toBe(true);
  });

});
