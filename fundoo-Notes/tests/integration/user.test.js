import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';
let notetoken;
describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  
  });
  
          describe(`POST /User`, () => {
            it('should  register ', (done) => {
               const user1 = {
                firstName : "dhoni34",
                lastName : "rohit34",
                email : "rohit34@gmail.com",
                password : "1234567"
              };

              request(app)
                .post('/api/v1/users/userregister')
                .send(user1)
                .end((err, res) => {
                  expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
                  done();
                });
            });
        });

        describe(`login`, () => {

          it('should login', (done) => {

            const user1 = {
              
              email : "rohit34@gmail.com",
              password : "1234567"
            };

            request(app)
              .post('/api/v1/users/login')
              .send(user1)
              .end((err, res) => {
                notetoken = res.body.data;
                expect(res.statusCode).to.be.equal(HttpStatus.OK);
                done();
              });
          });
      });


      describe(`forgetPassword`, () => {

        it('should forget', (done) => {

          const user1 = {
            
            email : "rohit34@gmail.com"
           
          };

          request(app)
            .post('/api/v1/users/forgetPassword')
            .send(user1)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();

            });

        });
    });
    
    describe(`resetPassword`, () => {

      it('should reset', (done) => {
       
        const user1 = {
          
          password:"rabhu987556"
         
        };
        const newJwtoken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvaGl0MzRAZ21haWwuY29tIiwiaWQiOiI2MjI5ZmNiMmNkZTg5NzM0NTA4OGE1MTEiLCJpYXQiOjE2NDY5MTg4MzR9.5dZ_V6o6G8I9u-B22BIHT4b3cqtf6MJfoYrj7lc9XLM";
        request(app)
          .put('/api/v1/users/resetPassword')
          .set('Authorization',`${newJwtoken}`)
          .send(user1)
          .end((err, res) => {
            expect(res.statusCode).to.be.equal(HttpStatus.OK);
            done();
          });
        });
      });
      describe(`POST/Create note`, () => {
        it('Create note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .post('/api/v1/note')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.CREATED);
              done();
            });
        });
      });


      describe(`GET/Fetched all notes`, () => {
        it('Get all note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .get('/api/v1/note')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });
      });

      describe(`GET/get single note`, () => {
        it('Get single note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .get('/api/v1/note/622a15715c5d8945d0a59bf5')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
              done();
            });
        });
      });

      describe(`PUT/archive note`, () => {
        it('Archive note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .put('/api/v1/note/archive/622a15715c5d8945d0a59bf5/')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
              done();
            });
        });
      });


      describe(`PUT/trash note`, () => {
        it('Trash note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .put('/api/v1/note/trashedNotes/622a15715c5d8945d0a59bf5')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });
      });
      describe(`PUT/update note `, () => {
        it('Update a note by ID', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .put('/api/v1/note/622a15715c5d8945d0a59bf5')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.ACCEPTED);
              done();
            });
        });
      });
    
      describe(`DELETE/delete note `, () => {
        it('Delete note', (done) => {
          const note = {
            Title: 'title2',
            Description: 'description2',
            Color: 'Green2',
          };
    
          request(app)
            .delete('/api/v1/note/622a15715c5d8945d0a59bf5')
            .set('Authorization',  `Bearer ${notetoken}`)
            .send(note)
            .end((err, res) => {
              expect(res.statusCode).to.be.equal(HttpStatus.OK);
              done();
            });
        });
      });
   });
