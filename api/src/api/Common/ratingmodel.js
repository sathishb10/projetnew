import mongoose from 'mongoose'

const ratingFilesSchema = new mongoose.Schema({
    radVal: {
        type: String
    },
    userid: {
        type: String
    }
},
    {
        timestamps: true
    });

const RatingFilesModel = mongoose.model('rateingFiles', ratingFilesSchema)

export default RatingFilesModel