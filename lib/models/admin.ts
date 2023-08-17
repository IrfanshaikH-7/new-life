import mongoose from 'mongoose';
import { string } from 'prop-types';

const AdminSchema = new mongoose.Schema({

    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, default:'member'}

})

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;