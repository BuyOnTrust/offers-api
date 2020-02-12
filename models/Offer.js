const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    name: String,
    pid: [Number],
    page: String,
    type: String,
    image: String,
    link: String,
    text: String,
    click_count: {
        type: Number,
		default: 0,
		required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    modified: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export default mongoose.model('Offer', OfferSchema);