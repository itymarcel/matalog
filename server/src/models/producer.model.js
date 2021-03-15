import mongoose from "mongoose";

const producerSchema = { 
    name: String,
    address: String,  
    phone: Number,
    website: String 
};
const Producer = mongoose.model("Producer", producerSchema);

export default Producer;