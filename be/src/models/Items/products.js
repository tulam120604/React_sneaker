import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';
import mongoosePaginate from 'mongoose-paginate-v2';

const schema_Products = new mongoose.Schema({
    name_product: {
        type: String,
        maxlength: 255,
        required: true,
    },
    gallery_product: {
        type: [String],
        required: true,
    },
    description_product: {
        type: String,
        required: true,
        minlength: 3
    },
    featured_product: {
        type: Boolean,
        default: false
    },
    stock: {
        type: Number,
        default: 0
    },
    attributes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attributes'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true, versionKey: false
});

schema_Products.plugin(mongoosePaginate);
schema_Products.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true
})

export default mongoose.model('Product', schema_Products)