var mongoose = require('mongoose');

var eventDAO = module.exports = {};

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/flisol-event-management');

var EventSchema = Schema({
    manager: {type: Schema.ObjectId, required: true},
    title: String,
    description: String,
    place: String
});

var Event = mongoose.model('Event', EventSchema);

eventDAO.create = function (event, callback) {
    var eventModel = new Event(event);

    eventModel.save(callback);

};

