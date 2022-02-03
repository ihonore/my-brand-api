import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import { userData, validUser } from './dummyData.js';

chai.use(chaiHttp)
describe("QUERY END-POINT TESTING", () => {

    it("It should register the user",(done) => {
        chai.request(app).get("/api/v1/users/register")
        .send(userData)
        .end((err,res)=>{
            console.log(res)
            // expect(res).to.have.property("status")
            // expect(res.body).to.have.property("message")
            // expect(res.body).to.have.property("data")
          done()
        })
        
    })

    let token=""
    it("It should loggin the user",(done) => {
        chai.request(app).get("/api/v1/users/login")
        .send(validUser)
        .end((err,res)=>{
            console.log(res.body)
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })
    it("While logged in Should retrieve the queries",(done) => {
        chai.request(app).get("/api/v1/queries/")
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })

    it("while not logged in, should not retrieve the queries",  (done) => {
        chai.request(app).get("/api/v1/queries/")
        .send()
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([401])
        done()
    })
    })

    it("Should not retrieve the queries",  (done) => {
        chai.request(app).get("/api/v1/qeury/")
        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    
    })
})