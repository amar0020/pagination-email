const mongoose= require("mongoose");


const UserSchema= mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String, required:true},
    email:{type:String,required:true}
})

const User = mongoose.model("user",UserSchema)

module.exports= User