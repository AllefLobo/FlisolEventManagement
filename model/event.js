var mongoose = require("mongoose");

var config = require("config");

var schema = mongoose.Schema;

mongoose.connect(config.DBHost);

var EventSchema = schema({
    manager: {type: schema.ObjectId, required: true},
    title: String,
    description: String,
    place: String
});

module.exports = mongoose.model("Event", EventSchema);

