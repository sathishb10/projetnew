import mongoose from 'mongoose'

const userDetailsSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    file: {
        type: String
    }
},
    {
        timestamps: true
    });

const UsersModel = mongoose.model('users', userDetailsSchema)

export default UsersModel