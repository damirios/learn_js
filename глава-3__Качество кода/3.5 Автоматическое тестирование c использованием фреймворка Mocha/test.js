it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
});

// тут как бы три теста в одном. Лучше разбить это на три отдельных теста.
// Т.к. если тест выдаст ошибку, придётся выяснять, в каком именно тесте ошибка.
// При наличии трёх отдельных тестов, такой проблемы не будет
describe("Возводит x в степень n", () => {
    it("Возводит 5 в степень 1", function() {
        assert.equal(pow(5, 1), 5);
    });

    it("Возводит 5 в степень 2", function() {
        assert.equal(pow(5, 2), 25);
    });

    it("Возводит 5 в степень 3", function() {
        assert.equal(pow(5, 3), 125);
    });
});
