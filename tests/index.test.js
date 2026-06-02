import { getCharacterStatus } from "../src/index.js";

describe("Функция определения статуса здоровья", () => {
  test('Статус "healthy" при здоровье больше 50', () => {
    expect(getCharacterStatus({ name: "Маг", health: 90 })).toBe("healthy");
    expect(getCharacterStatus({ name: "Воин", health: 51 })).toBe("healthy");
  });

  test('Статус "wounded" при здоровье от 15 до 50 включительно', () => {
    expect(getCharacterStatus({ name: "Лучник", health: 30 })).toBe("wounded");
    expect(getCharacterStatus({ name: "Паладин", health: 50 })).toBe("wounded");
    expect(getCharacterStatus({ name: "Разбойник", health: 15 })).toBe(
      "wounded",
    );
  });

  test('Статус "critical" при здоровье меньше 15', () => {
    expect(getCharacterStatus({ name: "Зомби", health: 14 })).toBe("critical");
    expect(getCharacterStatus({ name: "Скелет", health: 0 })).toBe("critical");
    expect(getCharacterStatus({ name: "Призрак", health: -10 })).toBe(
      "critical",
    );
  });
});
