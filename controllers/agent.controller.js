const express = require('express');
const router = express.Router();
const agentService = require('../services/agent.service');

router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    agentService.getAll()
        .then(agent => res.json(agent))
        .catch(err => next(err));
}
