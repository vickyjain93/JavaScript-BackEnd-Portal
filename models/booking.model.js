const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    day: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    agentName: { type: String, required: true },
    partnerName: { type: String, required: true },
    propertyName: { type: String, required: true },
    guestName: { type: String, required: true },
    pax: { type: Number, required: true },
    receivedBy: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    amountCollected: { type: Number, required: true },
    amountProperty: { type: Number,required: true },
    aaoKabhi: { type: Number, required: true },
    food: { type: Number, required: true },
    partnerPayout: { type: Number, required: true },
    ownerPayout: { type: Number, required: true },
    paymentStatus: { type: String, required: true },
    bookingStatus: { type: String, required: true },
    comment: { type: String },
    createdDate: { type: Date, default: Date.now }
}); 

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Booking', schema);