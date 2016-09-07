var mongoose = require('mongoose');

var config = require('config');

var Schema = mongoose.Schema;

mongoose.connect(config.DBHost);

var EventSchema = Schema({
    manager: {type: Schema.ObjectId, required: true},
    title: String,
    description: String,
    place: String
});

module.exports = mongoose.model('Event', EventSchema);

