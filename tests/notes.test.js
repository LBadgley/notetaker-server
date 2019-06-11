require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const app = require('../lib/app');

describe('notes routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a note via POST', () => {
    return request(app)
      .post('/api/v1/notes')
      .send({ title: 'the title', body: 'the body of the note' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'the title',
          body: 'the body of the note',
          __v: 0
        });
      })
  });
});
