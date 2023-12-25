import Booking from "../models/Booking.js";
import { responder } from "../util.js";

const postApiBooking = async (req, res) => {
    const { bus, passengerName, mobileNo, seatNumber, to, from } = req.body;

    const booking = new Booking({
        bus,
        passengerName,
        mobileNo,
        seatNumber,
        to,
        from
    });
    try {
        const savedBooking = await booking.save();
        return responder({ res, success: true, message: 'Booking created.', data: savedBooking });
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
    }
}

const getApiBooking = async (req, res) => {
    const allBooking = await Booking.find();

    return responder({
        res,
        success: true,
        message: 'Successfully feactched allBooking',
        data: allBooking
    })
}

const putApiBooking = async (req, res) => {
    const { id } = req.params;

    const { bus, passengerName, mobileNo, seatNumber, to, from } = req.body;

    await Booking.updateOne({ _id: id },
        {
            $set: {
                bus: bus,
                passengerName: passengerName,
                mobileNo: mobileNo,
                seatNumber: seatNumber,
                to: to,
                from: from
            }
        });

    const updatedBooking = await Booking.findById(id);
    return responder({
        res,
        success: true,
        data: updatedBooking,
        message: 'Booking updated successfully.'
    });
}

const getApiBookingById = async (req, res) => {
    const { id } = req.params;

    // get single booking
    try {
        const booking = await Booking.findById({ _id: id })
        return responder({
            res,
            success: true,
            data: booking,
            message: 'Booking fetched successfully.'
        })
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        })
    }
}

const deleteApiBooking = async (req, res) => {
    // delete booking
    const { id } = req.params;

    await Booking.deleteOne({ _id: id })

    return responder({
        res,
        success: true,
        data: {
            id: id
        },
        message: 'Booking deleted successfully.'
    })
}




export { postApiBooking, getApiBooking, putApiBooking, getApiBookingById, deleteApiBooking };