import mongoose from "mongoose";

const schema_order = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    },
    items: [],
    total_price: {
        type: Number,
        required: true,
    },
    order_number: {
        type: Number,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7'],
        default: '1'
    }
})

schema_order.pre('save', (next) => {
    if (!this.order_number) {
        const date = Date.now().toString();
        const random = Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0");
        this.order_number = `${date}-${random}`;
    }
    next();
})