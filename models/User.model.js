import mongoose from "mongoose";
const {Schema, model}  = mongoose
/*
name - Type String. It should be required.
email - Type String, It should be required, and you can use match to setting only valid emails
passwordHash - Type String, It should be required but here we dont set de match we will save hash password
todos - Type array of ObjectId this one will be an reference to our todo model
timestamps - use, timstamps config of mongoose
*/
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        // use match to setting only valid emails
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    
    todos: [String]
}, {timestamps: true})

const User = model("User", UserSchema)

export default User




var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
