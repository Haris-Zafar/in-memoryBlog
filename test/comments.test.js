const request = require('supertest');
const app = require('../index'); // adjust path as needed

describe('Test Comment Routes', () => {
  // Close the server after all tests
  afterAll(done => {
    done();
  });

  it('should update a comment', async () => {
    const response = await request(app)
      .put('/comments/1/1')
      .send({
        text: "Updated comment"
      });
    expect(response.statusCode).toBe(200); // or whatever status code you expect
  });

  it('should delete a comment', async () => {
    const response = await request(app)
      .delete('/comments/1/1');
    expect(response.statusCode).toBe(204);
  });
});
