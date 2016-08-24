var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = Schema({
    manager: Schema.ObjectId,
    title: String,
    description: String,
    place: String
});

