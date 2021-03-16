import mongoose from "mongoose";

const supplierSchema = { 
    name: String,
    address: String,  
    phone: String,
    website: String 
};
const Supplier = mongoose.model("Supplier", supplierSchema);

export default Supplier;