const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const clientSchema = new schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;