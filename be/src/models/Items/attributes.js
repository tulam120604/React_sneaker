import mongoose from 'mongoose';

const schema_Attribute = new mongoose.Schema({
    varriants: [
        {
            color: {
                type: String,
                required: true,
            },
            size: [
                {
                    name_size: String,
                    stock: {
                        type: Number,
                        required: true
                    },
                    price: {
                        type: Number,
                        required: true
                    },
                    sale_quantity: {
                        type: Number,
                        default: 0,
                    },
                }
            ]
        }
    ]
}, { timestamps: true, versionKey: false });

export default mongoose.model('Attributes', schema_Attribute);