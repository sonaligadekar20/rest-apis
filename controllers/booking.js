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

const getApiBooking = async (req, res) =>{
    const allBooking = await Booking.find();

    return responder({res,
         success: true, 
         message: 'Successfully feactched allBooking',
         data: allBooking
    })
}

export { postApiBooking, getApiBooking};