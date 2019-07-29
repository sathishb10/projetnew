import mongoose from 'mongoose'

const sendFilesSchema = new mongoose.Schema({    
    username: {
        type: String
    },
    subject: {
        type: String
    },
    file: {
        type: String
    },
    key: {
        type: String
    },
    date: {
        type: String
    }
},
    {
        timestamps: true
    });

const SendFilesModel = mongoose.model('sendFiles', sendFilesSchema)

export default SendFilesModel