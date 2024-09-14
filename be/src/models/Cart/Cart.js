import mongoose from "mongoose";

const schema_cart = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    items: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            color: String,
            quantity: {
                type: Number,
                default: 0
            },
            size: String
        }
    ],
}, {
    timestamps: true, versionKey: false
});

export default mongoose.model('Cart', schema_cart)