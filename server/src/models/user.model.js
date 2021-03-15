import mongoose from "mongoose";

const userSchema = { 
    userName: String,
    firstName: String,  
    lastName: String,
    country: String, 
    company: String,
    occupation: String,
    email: String  
};
const User = mongoose.model("User", userSchema);

export default User;