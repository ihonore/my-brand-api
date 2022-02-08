import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/app.js";
import "dotenv/config";

chai.use(chaiHttp);
describe("MAIN ENTRY POINT TESTING", () => {

    it("Should display welcome message", (done) => {
        chai
            .request(app)
            .get("/")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([200])
                expect(res.body).to.have.property("message");

                done();
            });
    });

    it("Should display found", (done) => {
        chai
            .request(app)
            .get("/david")
            .send()
            .end((err, res) => {
                expect(res).to.have.status([404])
                expect(res.body).to.have.property("error");
                done();
            });
    });
});