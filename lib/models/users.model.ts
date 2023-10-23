import mongoose, { now } from 'mongoose';
import { string } from 'prop-types';

const UserSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true,},
    email: {type: String, required: true, unique: true},
    joined: {type: Date, default:now() },
    isAdmin: {type: Boolean, default: false}


})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;