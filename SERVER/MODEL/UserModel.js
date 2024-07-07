const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

UserSchema.pre('save',async function(next){
   const user=this;

   if(!user.isModified('password')){
    return next();
   }
   try {
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(user.password,salt);
    user.password=hashedpassword;
    next();
   } catch (error) {
    console.log(error); 
    next(error); 
   }
})

UserSchema.methods.comparePassword=async function(candidatepassword){
    try {
        return await bcrypt.compare(candidatepassword,this.password);
    } catch (error) {
        throw new Error(error);
    }
}


const User = mongoose.model('User', UserSchema);
module.exports = User;
