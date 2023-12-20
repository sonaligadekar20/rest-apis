import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if (conn) {
        console.log(`MongoDB connected`);
    }
};
connectDB(); 

app.get('/health', (req, res) => {
    res.send({
        success: true,
        message: 'Server is running'
    });
});

app.post("/bookings", async (req, res)=>{
    // const {} = req.body;
    // create booking
    res.json({
        success: true,
        data: {},
        message: 'Booking created'
    })
});

app.get("/bookings", async (req, res)=>{
    // get all bookings
    res.json({
        success: true,
        data: [],
        message: 'Booking fetched'
    })
});

app.get("/bookings/:id", async (req, res)=>{
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

app.put("/bookings/:id", async (req, res)=>{
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

app.patch("/bookings/:id", async (req, res)=>{
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

app.delete("/bookings/:id", async (req, res)=>{
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

