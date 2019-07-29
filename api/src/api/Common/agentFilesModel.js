import mongoose from 'mongoose'

const agentFilesSchema = new mongoose.Schema({
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
    },
    from: {
        type: String
    }
},
    {
        timestamps: true
    });

const AgentFilesModel = mongoose.model('agentFiles', agentFilesSchema)

export default AgentFilesModel