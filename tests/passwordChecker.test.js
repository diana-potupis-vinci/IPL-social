const passwordChecker = require("../passwordChecker");

describe("passwordChecker", () => {
  test("Il doit contenir au moins 8 charactères", () => {
    const result = passwordChecker("12345678");
    expect(result).toBe(true);
  });
});
