test('Devo conhecer os principais acertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);

});

test('Devo saber como trabalhar com objetos', () => {
    const object = { name: 'Gustavo', description: 'test description'};
    expect(object).toHaveProperty('name', 'Gustavo');
})