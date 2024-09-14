import mongoose from "mongoose";

const schema_address = new mongoose.Schema({
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    infor_address: String,
    default_address: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true, versionKey: false
});

export default mongoose.model('Address', schema_address)