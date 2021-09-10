const express = require('express');
const router = express.Router();
const bookingService = require('../services/booking.service');

router.post('/register', newBooking);
router.put('/updateBooking/:id', updateBooking);
router.get('/getGMV', getGMV);
router.get('/count', getCount);
router.get('/getNRV', getNRV);
router.get('/getCurrentMonthBooking', getCurrentMonthBooking);
router.get('/getMyShare', getMyShare);
router.get('/villa/:villaName', getByVilla);
router.get('/checkInDate/:checkInDate', getByDate);
router.get('/checkIndate/:checkInDate/:checkOutDate', getByDate);
router.get('/', getAll);


module.exports = router;

function newBooking(req, res, next) {
    bookingService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    bookingService.getAll()
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getCount(req, res, next) {
    bookingService.getCount()
        .then(count => res.json(count))
        .catch(err => next(err));
}

function getByVilla(req, res, next) {
    bookingService.getByVilla(req.params.villaName)
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function updateBooking(req, res, next) {
    bookingService.updateBooking(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getGMV(req, res, next) {
    bookingService.getGMV()
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getNRV(req, res, next) {
    bookingService.getNRV()
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getMyShare(req, res, next) {
    bookingService.getMyShare()
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getCurrentMonthBooking(req, res, next) {
    bookingService.getCurrentMonthBooking()
        .then(booking => res.json(booking))
        .catch(err => next(err));
}

function getByDate(req, res, next) {
    if (req.params.checkInDate && req.params.checkOutDate) {
        bookingService.getByDate(req.params.checkInDate, req.params.checkOutDate)
        .then((booking) => res.json(booking))
        .catch(err => next(err));
    } else if (req.params.checkInDate) {
        bookingService.getByDate(req.params.checkInDate)
        .then((booking) => res.json(booking))
        .catch(err => next(err));
    } else if (req.params.checkOutDate) {
        bookingService.getByDate(req.params.checkOutDate)
        .then((booking) => res.json(booking))
        .catch(err => next(err));
    }

}