var chai = require("chai");
var assert = chai.assert;

var event = require('../model/event');

describe("Event", function () {
    describe("#create()", function () {
        it("error must be null", function (done) {
            event.create({
                manager: "568f25aad134569d078b4567",
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            }, function (erro) {
                if(erro){
                    done(erro);
                }else{
                    done();
                }
            });
        });

        it("error must not be null, id manager is missing", function (done) {
            event.create({
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            }, function (erro) {
                if(erro){
                    done();
                }else{
                    done({});
                }
            });
        });

        it("error must not be null, id manager is not valid", function (done) {
            event.create({
                manager: "568f25afgjfgjad134569d078b4567",
                title: "Just a event",
                descrition: "Just a event like everyone else",
                place : "somewhere"
            }, function (erro) {
                if(erro){
                    done();
                }else{
                    done({});
                }
            });
        });
    })
});