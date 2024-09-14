import mongoose from 'mongoose';

const schema_Category = new mongoose.Schema({
    name_category : {
        type : String,
        required : true,
        unique : true,
    }
}, {timestamps : true, versionKey: false});

export default mongoose.model('Category', schema_Category)