import connectToDatabase from '../db';
import Offer from '../models/Offer';

import { success, failure } from '../libs/response-lib';

export async function getAllOffers(context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectToDatabase();
        const offers = await Offer.find({
            name: { $exists: true }
        });

        return success(offers);
    } catch (err) {
        console.log('Error getting all offers:', err);
        return failure({
            status: false,
            body: err
        });
    }
};

export async function getPageOffers(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const page = event.pathParameters.page;
    try {
        await connectToDatabase();
        const offers = await Offer.find({
            page: page
        });

        return success(offers);
    } catch (err) {
        console.log('Error getting all offers:', err);
        return failure({
            status: false,
            body: err
        });
    }
};