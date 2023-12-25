import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    bus: {
        type : String,
        required: true,
    },
    passengerName: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true
    },
    seatNumber: {
        type: Number,
        required: true,
        unique: true

    },
    to: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
}, 
{ timestamps: true }
)


const Booking = model('Booking', bookingSchema)
export default Booking