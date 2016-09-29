process.env.NODE_ENV = "test";

var chai = require("chai");
var server = require("../app");
var chaiHttp = require("chai-http");
var should = chai.should();
var expect = chai.expect;

var Event = require("../model/event");

chai.use(chaiHttp);

describe("Event", function () {
    this.timeout(60000);
    beforeEach(function (done) {
        Event.remove({}, function (err) {
            if(err){
                console.log(err);
            }
            done();
        });
    });

    describe("#create", function () {
        it("error must be null", function (done) {
            var event = new Event({
                manager: "568f25aad134569d078b4567",
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            });

            event.save(function (erro) {
                if(erro){
                    done(erro);
                }else{
                    done();
                }
            });
        });

        it("error must not be null, id manager is missing", function (done) {
            var event = new Event({
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            });

            event.save(function (erro) {
                if(erro){
                    done();
                }else{
                    done({});
                }
            });
        });

        it("error must not be null, id manager is not valid", function (done) {
            var event = new Event({
                manager: "568f25afgjfgjad1hh34569d078b4567",
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            });

            event.save(function (erro) {
                if(erro){
                    done();
                }else{
                    done({});
                }
            });
        });
    });
});


describe("API", function () {
    describe("Event", function () {
        describe("/POST Event", function () {
            it("it should creat a event", function (done) {
                chai.request(server)
                    .post('/api/event')
                    .send({
                        manager: "568f25aad134569d078b4567",
                        title: "Just a event",
                        descrition: "Just a event like everyone else",
                        place : "somewhere"
                    })
                    .end(function (err, res) {
                        expect(null).to.be.a('null');
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});