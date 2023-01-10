const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

require('dotenv').config();
/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.DB_HOST);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});
const mockData = {
  email: '1testEmail@gmail.com',
  password: '123456',
};
describe('POST /api/register', () => {
  it('should create a user', async () => {
    const res = await request(app).post('/api/auth/register').send(mockData);
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe(mockData.email);
    expect(res.body.subscription).toBe('starter');
  });
});
