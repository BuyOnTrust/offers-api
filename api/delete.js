import connectToDatabase from '../db';
import Offer from '../models/Offer';

import { success, failure } from '../libs/response-lib';

export async function removeOffer(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
	const offerId = event.pathParameters.offer_id;
    try {
        await connectToDatabase();
        const offer = await Offer.findByIdAndDelete(offerId);
        return success(offer);
    } catch (err) {
        console.log('Error deleting offer:', err);
        return failure({
            status: false,
            body: err
        });
    }
};