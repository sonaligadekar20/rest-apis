import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

import { postApiBooking } from './controllers/booking';

const app = express();
app.use(express.json());

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if (conn) {
        console.log(`MongoDB connected`);
    }
};
connectDB(); 


// bus api
app.post('/api/buses', (req, res)=>{

})
app.get('/api/v1/buses', (req, res)=>{
    res.send({
        success: true,
        data:[
            {
                id: 1,
                name: 'Bus 1',
                seats: 20,
            },
            {
                id: 1,
                name: 'Bus 2',
                seats: 20
            }
        ]  
    })
})

app.get('/api/v2/buses', (req, res)=>{
    res.send({
        success: true,
        data:[
            {
                id: 1,
                name: 'Bus 1',
                totalSeats: 20,
            },
            {
                id: 1,
                name: 'Bus 2',
                totalSeats: 20
            }
        ]  
    })
})


// booking api
app.post("/api/bookings", postApiBooking);

app.get("/api/bookings", async (req, res)=>{
    // get all bookings
    res.json({
        success: true,
        data: [],
        message: 'Booking fetched'
    })
});

app.get("/api/bookings/:id", async (req, res)=>{
    // get single booking
    const {id} = req.params;
    
    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'Booking fetched'
    })
})

app.put("/api/bookings/:id", async (req, res)=>{
    // update booking
    const {id} = req.params;

    res.json({
        success:true,
        data: {
          id: id  
        },
        message: 'Booking updated'
    })
})

app.patch("/api/bookings/:id", async (req, res)=>{
    // update booking

    const {id} = req.params;
    // update booking logic

    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'Booking updated'
    })
})

app.delete("/api/bookings/:id", async (req, res)=>{
    // delete booking
    const {id} = req.params;

    res.json({
        success: true,
        data: {
            id: id
        },
        message: 'Booking deleted'
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

