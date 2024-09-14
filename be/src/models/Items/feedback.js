import mongoose from "mongoose";

const schema_Feedback = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    item : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },
    notes: {
        type: String,
        maxlength: 5000
    },
    rating: {
        type: Number,
        default: 5
    }
}, {
    timestamps : true, versionKey : false
});

export default mongoose.model('Feedback', schema_Feedback)