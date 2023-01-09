const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../routes/api/auth');

require('dotenv').config();
/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.DB_HOST);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe('POST /api/register', () => {
  it('should create a user', async () => {
    const res = await request(app).post('/api/register').send({
      email: 'testEmail@gmail.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(201);
  });
});
