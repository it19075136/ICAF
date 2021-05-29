const app = require('../app');
const supertest = require('supertest');

jest.setTimeout(10000);

test('should post insert a new user', async () => {
    await supertest(app).post('/user/add').send({

        name: " testName",
        email: " test.email",
        password: "test.password",
        gender: " test.gender",
        type: " test.type",
        phoneNumber: 123456789

   
    }).expect(200);
});