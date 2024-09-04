import request from 'supertest';
import app from '../../../src/app';

describe('User signup', () => {
  it('User signed up successfully', async () => {
    const res = await request(app).post('/signup/basic').send({
      username: 'Sam Smith',
      email: 'sam.smith@gmail.com',
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toMatch(/Successful/i);
    expect(res.body.data).toBeDefined();

    expect(res.body.data.user).toHaveProperty('id');
    expect(res.body.data.user).toHaveProperty('username');
    expect(res.body.data.user).toHaveProperty('email');
  });
});
