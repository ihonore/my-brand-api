import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { query, userData, validUser } from './dummyData.js';
import Query from "./../src/models/query.js"
import User from "./../src/models/user.js"

let queryId

const getQueryId= async ()=>{
    const all = await Query.find()
    let id=all[0]._id;
    return id
}

(async ()=>{
  queryId=await getQueryId()
})()

chai.use(chaiHttp)
describe("QUERY END-POINT TESTING", () => {
    before(async ()=>{
       await User.deleteMany({email:userData.email})
       await Query.deleteMany({email:userData.email})
    })

    it("It should register the user",(done) => {
        chai.request(app).post("/api/v1/users/register")
        .send(userData)
        .end((err,res)=>{
            expect(res).to.have.status([201])
          done()
        })
        
    })

    let token=""
    it("It should loggin the user",(done) => {
        chai.request(app).post("/api/v1/users/login")
        .send(validUser)
        
        .end((err,res)=>{
            token=res.body.accessToken;
            expect(res.body).to.have.property("accessToken")
          done()
        })
        
    })
    it("When logged in Should retrieve the queries",(done) => {
        chai.request(app).get("/api/v1/queries/")
        .set('Authorization', `Bearer ${token}`)
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })

    it("When not logged in, should not retrieve the queries",  (done) => {
        chai.request(app).get("/api/v1/queries/")
        .send()
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([401])
        done()
    })
    })

    it("Should create a query",(done) => {
        chai.request(app).post("/api/v1/queries/")
        .send(query)
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })

    it("Should not retrieve the query by id when not authorized", (done) => {
        chai
            .request(app)
            .get(`/api/v1/queries/${queryId}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([401]);
                done();
            });
    });

    it("Should retrieve the query by id when authorized", (done) => {
        chai
            .request(app)
            .get(`/api/v1/queries/${queryId}`)
            .set('Authorization', `Bearer ${token}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200]);
                expect(res).to.have.property("status");
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("data");
                done();
            });
    });

    it("Should not retrieve the queries",  (done) => {
        chai.request(app).get("/api/v1/qeury/")
        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    
    })

    it("Should delete the query by id when authorized", (done) => {
        chai
            .request(app)
            .delete(`/api/v1/queries/${queryId}`)
            .set('Authorization', `Bearer ${token}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200]);
                expect(res).to.have.property("status");
                expect(res.body).to.have.property("message");
                done();
            });
    });

    it("Should not delete the query by id when not authorized", (done) => {
        chai
            .request(app)
            .delete(`/api/v1/queries/${queryId}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([401]);
                done();
            });
    });
    it("Should not delete the query when wrong id is provided", (done) => {
        chai
            .request(app)
            .delete(`/api/v1/queries/edf87354`)
            .set('Authorization', `Bearer ${token}`)
            .send()
            .end((err, res) => {
                expect(res).to.not.have.property("data");
                done();
            });
    });


})