const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
chai.expect();
const request = require('supertest');

//In this scenario, let's pretend that we made the API we're using and it's attached to our database. We want to test that the data we're receiving is correct without constantly hitting our own database. So how do we do that?

//If we want to check that our HTTP methods work but don't want to hit the database then we need to mock the HTTP call

//If we have methods that are manipulating the data we get back from the database, then we'd want to mock the database or set up a test database

//With Mocha, we have to use another library for mocking such as sinon