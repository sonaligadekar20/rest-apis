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

    res.json({
        success: true,
        data: {},
        message: 'Booking created'
    })
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

