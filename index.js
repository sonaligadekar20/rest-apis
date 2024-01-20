import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

import { deleteApiBooking, getApiBooking, getApiBookingById, postApiBooking, putApiBooking} from './controllers/booking.js';
import { deleteApiBus, getApiBusById, getApiBusv1, getApiBusv2, patchApiBus, postApiBus, putApiBus } from './controllers/bus.js';

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
app.post('/api/buses', postApiBus)

app.get('/api/v1/buses', getApiBusv1)

app.get('/api/v2/buses', getApiBusv2)

app.get("/api/buses/:id", getApiBusById );

app.put("/api/buses/:id", putApiBus);

app.patch("/api/buses/:id", patchApiBus);

app.delete("/api/delete/:id", deleteApiBus)

// booking api
app.post("/api/bookings", postApiBooking);

app.get("/api/bookings", getApiBooking);

app.get("/api/bookings/:id", getApiBookingById);
    
app.put("/api/bookings/:id", putApiBooking );

app.delete("/api/bookings/:id", deleteApiBooking)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

