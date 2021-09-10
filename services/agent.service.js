const db = require('_helpers/db');
const Agent = db.Agent;

module.exports = {
    getAll
};

async function getAll() {
    return await Agent.find();
}
