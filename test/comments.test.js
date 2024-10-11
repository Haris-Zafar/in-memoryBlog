const request = require('supertest');
const express = require('express');
const app = require('../index');  // Assuming your Express app is in index.js

describe('Test Comment Routes', () => {

    it('should update a comment', async () => {
        const res = await request(app)
            .put('/comments/1/1') // Assuming post ID = 1, comment ID = 1
            .send({
                text: "Updated comment"
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body.text).toEqual("Updated comment");
    });

    it('should delete a comment', async () => {
        const res = await request(app)
            .delete('/comments/1/1');  // Assuming post ID = 1, comment ID = 1
        expect(res.statusCode).toEqual(204);
    });

});
