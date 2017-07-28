var express = require("express");
var path = require("path");
var app = express();
var reserved = [];
var waitlist = [];
var tableReservations = require("../data/reservations.js");

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        return res.json(tableReservations);
    });

    app.get("/api/waitlist", function(req, res) {
        return res.json(waitlist);
    });


    app.post("/tables", function(req, res) {
        var newreservation = req.body;


        tableReservations.push(newreservation);
        console.log(tableReservations);

});
};