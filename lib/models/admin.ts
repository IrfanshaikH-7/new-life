import mongoose from 'mongoose';
import { string } from 'prop-types';

const AdminSchema = new mongoose.Schema({

    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},

})

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin; 