const express = require('express');
const router = express.Router();
const partnerService = require('../services/partner.service');

router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    partnerService.getAll()
        .then(partner => res.json(partner))
        .catch(err => next(err));
}
