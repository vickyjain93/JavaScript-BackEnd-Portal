const db = require('_helpers/db');
const Booking = db.Booking;

module.exports = {
    getAll,
    getByVilla,
    getByDate,
    getMyShare,
    getCount,
    getGMV,
    getNRV,
    create,
    updateBooking,
    delete: _delete,
    getCurrentMonthBooking
};

async function create(userParam) {
    const booking = new Booking(userParam);
    await booking.save();
}

async function getAll() {
    return await Booking.find().sort({ bookingDate: -1 })
}

async function getCount() {
    return await Booking.count();
}

async function getByVilla(villaName) {
    if (villaName === "All") {
        return await Booking.find().sort({ bookingDate: -1 });
    } else {
        return await Booking.find({
            propertyName: { $eq: villaName }
        }).sort({ bookingDate: -1 });
    }
}

async function updateBooking(id, bookingParam) {
    const booking = await Booking.findById(id);

    if (!booking) throw 'User not found';

    Object.assign(booking, bookingParam);

    await booking.save();
}

async function getGMV() {
    return await Booking.aggregate([
        {
            $group: {
            _id: null,
            count: { $sum: "$totalAmount" }
            }
        }
    ]);
}

async function getNRV() {
    return await Booking.aggregate([
        {
            $match: {
                "propertyName" : { $ne : "Killer", $ne : "Black Mamba" }
            },
        },
        {
            $group: {
                _id: null,
                nrv: { $sum: "$aaoKabhi" }
            },
        }
    ]);
}

async function getMyShare() {
    return await Booking.aggregate([
        {
            $match: {
                "propertyName" : { $eq : "Killer"}
            },
        },
        {
            $group: {
                _id: null,
                aaoKabhi: { $sum: "$aaoKabhi" }
            },
        }
    ]);
}

async function getCurrentMonthBooking() {
    let month = new Date().getMonth();

    return await Booking.aggregate([
        {
            $match: {
                $expr: {
                    $eq: [{$month: "$checkInDate"}, month]
                }
            },
        },
        {
            $group: {
                _id: null,
                bookingCount: { $sum: 1 }
            },
        }
    ]);
}

async function getByDate(checkInDate, checkOutDate) {
    if (checkInDate && checkOutDate) {
        return await Booking.find({
            checkInDate: { $eq: checkInDate },
            checkOutDate: { $eq: checkOutDate },
        });
    } else if (checkInDate) {
        return await Booking.find({
            checkInDate: { $eq: checkInDate }
        });
    } else if (checkOutDate) {
        return await Booking.find({
            checkOutDate: { $eq: checkOutDate }
        });
    } else {
        return await Booking.find();
    }
}

async function _delete(id) {
    await Booking.findByIdAndRemove(id);
}
