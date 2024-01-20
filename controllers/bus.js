import Bus from "../models/Bus.js";
import { responder } from "../util.js";

const postApiBus = async (req, res) => {
    const { busName, busNumber, totalSeat, availableSeat, bookedSeat } = req.body;

    const bus = new Bus({
        busName: busName,
        busNumber: busNumber,
        totalSeat: totalSeat,
        availableSeat: availableSeat,
        bookedSeat: bookedSeat
    })
    try {
        const savedBus = await bus.save()
        return responder({
            res,
            success: true,
            message: " Seats are available.",
            data: savedBus
        })
    }
    catch (err) {
        return responder({
            res,
            success: false,
            message: err.message,
        })
    }
}

const getApiBusv1 =  async (req, res)=>{    

    return responder({
        res,
        success: true,
        data:  [
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
        ],
       
        message: 'Buses featched.' 
    })
}

const getApiBusv2 = async (req, res)=>{
    return responder({
        res,
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
}

const getApiBusById = async (req, res) => {
    const { id } = req.params;

    const bus = await Bus.findById({ _id: id })
    return responder({
        res,
        success: "true",
        data: bus,
    });
}

const putApiBus = async (req, res) => {
    const {id} =req.params;
    const { busName, busNumber, totalSeat, availableSeat, bookedSeat } = req.body;

    await Bus.updateOne({_id : id},
        {
            $set:{
                busName: busName,
                busNumber: busNumber,
                totalSeat: totalSeat,
                availableSeat: availableSeat,
                bookedSeat: bookedSeat
            }
        } );

        const updatedBus = await Bus.findById(id);
        return responder ({
            res,
            success: "true",
            data:  updatedBus ,
            message: " Bus details updated successfully."
        })
}

const patchApiBus = async (req, res) => {
    const {id} =req.params;

    try{
        const { busNumber } = req.body;

        await Bus.updateOne({ _id : id},
            {
                $set:{ busNumber: busNumber }
            } );
            
            const updatedBus = await Bus.findOne({_id: id});
            return responder ({
                res,
                success: true,
                data: updatedBus,
                message: "Bus Number updated successfully."
            })
    }
    catch(err){
        return responder ({
            res,
            success: false,
            message: err.message
        })
    }
   
}

const deleteApiBus = async (req, res) => {
    // delete booking
    const { id } = req.params;

    await Bus.deleteOne({ _id: id })

    return responder({
        res,
        success: true,
        data: {
            id: id
        },
        message: 'Bus details deleted successfully.'
    })
}

export {deleteApiBus, postApiBus,getApiBusv1,  getApiBusv2, getApiBusById, putApiBus, patchApiBus}