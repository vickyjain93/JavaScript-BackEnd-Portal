const db = require('_helpers/db');
const Villa = db.Villa;

module.exports = {
    getAll
};

async function getAll() {
    return await Villa.find();
}
