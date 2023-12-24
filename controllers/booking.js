import Booking from "./../models/Booking.js";

const postApiBooking =  async (req, res)=>{
    const {bus, passengerName, mobileNo, seatNumber, to, from } = req.body;

    const booking = new Booking({
        bus, 
        passengerName,
        mobileNo,
        seatNumber,
        to, 
        from 
    })
    // const {} = req.body;
    // create booking
    // res.status(201).json({
    //     success: true,
    //     data: {},
    //     message: 'Booking created'
    // })
}

export {postApiBooking};