// import chai, { expect } from 'chai'
// import chaiHttp from 'chai-http'
// import app from '../src/app.js'
// import 'dotenv/config';
// import {article, comment} from "./dummyData.js"
// import Article from "./../src/models/article.js"
// import Comment from "./../src/models/comment.js"

// chai.use(chaiHttp)
// describe("COMMENT END-POINT TESTING", () => {
    
//     // before(async ()=>{
//     //     await Article.deleteOne({title:article.title})
//     //     await Comment.deleteOne({title:comment.commenter})
//     //  })

//      it("It should Create the comment",(done) => {
        
//         chai.request(app).post("/api/v1/articles")
//         .send(article)
//         chai.request(app).post("/api/v1/comments/"+article._id)
//         .send(comment)
//         .end((err,res)=>{
//             expect(res).to.have.status([201])
//           done()
//         })
        
//     })


//     it("Should retrieve comments of the Article", (done) => {
//         chai.request(app).get("/api/v1/comments/"+article._id)
//         .send()
//         .end((err,res)=>{
//             expect(res).to.have.property("status")
//             expect(res.body).to.have.property("message")
//             expect(res.body).to.have.property("data")
//           done()
//         })
        
//     })
//     it("Should not retrieve the comments",  (done) => {
//         chai.request(app).get("/api/v1/cmments")
//         .send()
//         .end((err,res)=>{
//         expect(res).to.have.status([404])
//         done()
//     })
//     })
// })