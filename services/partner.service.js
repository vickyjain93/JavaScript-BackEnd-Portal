const db = require('_helpers/db');
const Partner = db.Partner;

module.exports = {
    getAll
};

async function getAll() {
    return await Partner.find();
}
