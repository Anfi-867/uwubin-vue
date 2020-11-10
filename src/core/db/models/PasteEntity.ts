import { Schema, model } from 'mongoose';

const schema = new Schema({
    paste: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: new Date().toLocaleString(),
    },
    ownerKey: {
        type: String,
        required: true,
    },
});

export default model('Paste', schema);
