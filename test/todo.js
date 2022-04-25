
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const request = require('supertest');
const should = require('should');
const express = require('express');
const router = require('../routes/todoRoutes.js');
const externalURL = require('../constants').EXTERNAL_URL

//const request = require('supertest');

//In this scenario, let's pretend that we made the API we're using and it's attached to our database. We want to test that the data we're receiving is correct without constantly hitting our own database. So how do we do that?

//If we want to check that our HTTP methods work but don't want to hit the database then we need to mock the HTTP call

//If we have methods that are manipulating the data we get back from the database, then we'd want to mock the database or set up a test database

//With Mocha, we have to use another library for mocking such as sinon


const mock = new MockAdapter(axios);
const todoRouter = new express();

todoRouter.use('/', router);

before(async () => {  
    console.log("Before")
})

after(async () => {  
    console.log("After")
})


describe('todoController', function () {
    describe('getAllTodos', function () {
        it('should return results from API', async function () {

            const expectedUsers = [{ id: 1, name: "John Smith" }]

            mock.onGet(externalURL).reply(200, {
                users: expectedUsers,
            });
        
            const resp = await request(todoRouter).get('/')
            console.log("Got data", resp)

            resp.statusCode.should.equal(200)
            resp.body.data.should.have.property('users', expectedUsers)
            
        });
    });
});

