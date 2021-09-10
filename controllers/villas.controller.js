const express = require('express');
const router = express.Router();
const villaService = require('../services/villas.service');

router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    villaService.getAll()
        .then(villas => res.json(villas))
        .catch(err => next(err));
}
