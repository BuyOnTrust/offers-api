import connectToDatabase from '../db';
import Offer from '../models/Offer';

import { success, failure } from '../libs/response-lib';

export const newOffer = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const data = JSON.parse(event.body);

    try {
        await connectToDatabase();
        const response = await Offer.create(data);
        return success(response);
    } catch (err) {
        console.log('Error creating new offer:', err);
        return failure({
            status: false,
            body: err
        });
    }
};