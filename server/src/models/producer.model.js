import mongoose from "mongoose";

const producerSchema = { 
    name: String,
    address: String,  
    phone: String,
    website: String 
};
const Producer = mongoose.model("Producer", producerSchema);

export default Producer;