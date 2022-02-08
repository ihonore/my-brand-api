import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'
import 'dotenv/config';
import Article from "./../src/models/article.js"
import { article,validUser } from './dummyData.js';

let articleId
let articleId2

const getArticleId= async ()=>{
    const all = await Article.find()
    let id=all[0]._id;
    return id
}

(async ()=>{
    articleId=await getArticleId()
})()

chai.use(chaiHttp)
describe("ARTICLE END-POINT TESTING", () => {
    it("Should retrieve the articles", (done) => {
        chai.request(app).get("/api/v1/articles/")
        .send()
        .end((err,res)=>{
            expect(res).to.have.property("status")
            expect(res.body).to.have.property("message")
            expect(res.body).to.have.property("data")
          done()
        })
        
    })
    it("Should not retrieve the articles",  (done) => {
        chai.request(app).get("/api/v1/aritcle/")
        .send()
        .end((err,res)=>{
        expect(res).to.have.status([404])
        done()
    })
    })
    it("Should  retrieve the article by id", (done) => {
        chai
            .request(app)
            .get(`/api/v1/articles/${articleId}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200]);
                expect(res).to.have.property("status");
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("data");
                done();
            });
    });

    it("When not logged in, should not create an article",  (done) => {
        chai.request(app).post("/api/v1/articles/")
        .send()
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([401])
        done()
    })
    })

    it("When not logged in, should not update an article",  (done) => {
        chai.request(app).patch(`/api/v1/articles/${articleId}`)
        .set('Authorization', `Bearer ${token}`)
        .send(article)
        .end((err,res)=>{
        expect(res.body).to.have.property("error")
        expect(res).to.have.status([401])
        done()
    })
    })

    let token=""
    it("Should log in the user first",(done) => {
        chai.request(app).post("/api/v1/users/login")
        .send(validUser)
        
        .end((err,res)=>{
            token=res.body.accessToken;
            expect(res.body).to.have.property("accessToken")
          done()
        })
        
    })

    it("Should  not update article when not authorized", (done) => {
        chai
            .request(app)
            .patch(`/api/v1/articles/${articleId}`)
            .send({title:article.title})
            .end((err, res) => {
                expect(res).to.have.status([401]);
                expect(res).to.have.property("status");
                done();
            });
    });

    it("Should update article when authorized", (done) => {
        chai
            .request(app)
            .patch(`/api/v1/articles/${articleId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({title:article.title})
            .end((err, res) => {
                expect(res).to.have.status([200]);
                expect(res).to.have.property("status");
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("data");
                done();
            });
    });

    it("Should not delete article by id when not authorized", (done) => {
        chai
            .request(app)
            .delete(`/api/v1/articles/${articleId}`)
            .send()
            .end((err, res) => {
                expect(res).to.have.status([401]);
                done();
            });
    });
    // it("Should delete the article when authorized", (done) => {
    //     chai
    //     .request(app)
    //     .delete(`/api/v1/articles/${articleId}`)
    //     .set('Authorization', `Bearer ${token}`)
    //     .send()
    //     .end((err, res) => {
    //         expect(res).to.have.status([200]);
    //         expect(res).to.have.property("message");
    //         done();
    //     });
    // });

    it("should create an article when authorized", (done) => {
        chai
            .request(app)
            .post("/api/v1/articles")
            .set("Authorization", `Bearer ${token}`)
            .set('Content-Type', 'multipart/form-data')
            .field(article)
            .attach('image', './dummy_image/cow.png')
            .end((req, res) => {
                articleId2 = res.body.data._id;
                expect(res).to.have.status([200]);
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("data");
                expect(res.body).to.be.a("object");
                done();
            });
    });
})

//TODO: CREATE article test

