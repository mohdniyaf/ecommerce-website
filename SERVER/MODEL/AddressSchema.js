const mongoose = require('mongoose');
const Schema=mongoose.Schema;

// Define the address schema
const addressSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    addressInfo: {
        type: String,
        required: true,
    },
    addressType: {
        type: String,
        enum: ['home', 'office','other'],
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    localityAreaStreet: {
        type: String,
        required: true,
    },
    flatNoBuildingName: {
        type: String,
        required: true,
    },
    landmark: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
