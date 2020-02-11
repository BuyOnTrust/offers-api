import connectToDatabase from '../db';
import Offer from '../models/Offer';

import { success, failure } from '../libs/response-lib';

export const offer = async(event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const offerId = event.pathParameters.offer_id;
    const data = JSON.parse(event.body);
    try {
        await connectToDatabase();
        let offer;
        offer = await Offer.findById(offerId);
        if (!offer) {
            throw new Error('There is no offer found with ID:', offerId);
        };

        offer.name = data.name || offer.name;
        offer.type = data.type || offer.type;
        offer.image = data.image || offer.image;
        offer.link = data.link || offer.link;
        offer.text = data.text || offer.text;
        offer.save((err) => {
            if (err) return failure({ status: false, body: err });
        });
        return success(offer);

    } catch (err) {
        console.log('Error updating offer:', err);
        return failure({ status: false, body: err });
    }
};