import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import HttpStatus from 'http-status-codes';

import app from '../../src/index';

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
                firstName : "kumaraaa",
                lastName : "kurmi",
                email : "sachin@gmail.com",
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
              
              email : "sachin@gmail.com",
              password : "1234567"
            };

            request(app)
              .post('/api/v1/users/login')
              .send(user1)
              .end((err, res) => {
                expect(res.statusCode).to.be.equal(HttpStatus.OK);
                done();
              });
          });
      });


      describe(`forgetPassword`, () => {

        it('should forget', (done) => {

          const user1 = {
            
            email : "sachin@gmail.com"
           
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
          
          password:"rabhu963257"
         
        };
        const newJwtoken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhY2hpbkBnbWFpbC5jb20iLCJpZCI6IjYyMjM4Y2I2NzBjN2M0NmJlNDQ0NDRhMCIsImlhdCI6MTY0NjQ5Njk1MX0.eHNoN8Tkv2odQ8HcsqtURFhbOeIJ0IvR6-y4iSDUo0Q ";
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


    

});


