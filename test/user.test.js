const request = require('supertest');

const app = require('../src/app');


test('Deve listar todos os usuarios', () => {
    return request(app).get('/users')
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1);
            expect(response.body[0]).toHaveProperty('name', 'Gustavo')
            expect(response.body[0]).toHaveProperty('mail', 'gustavo@gmail.com')
        });
});

test('Deve inserir um usuario com sucesso', () => {
    return request(app).post('/users')
        .send({ name: 'João', mail: 'joao@gmail.com' })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body.name).toBe('João');
        });
});