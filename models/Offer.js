const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    name: {
        type: String,
		default: 'N/A',
		required: true
    },
    type: {
        type: String,
		default: 'basic',
		required: true
    },
    image: {
        type: String,
		default: 'https://cdn11.bigcommerce.com/s-90vdngbq7j/product_images/favicon.png?t=1561668788',
		required: true
    },
    link: {
        type: String,
		default: 'N/A',
		required: true
    },
    text: {
        type: String,
		default: 'N/A',
		required: true
    },
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