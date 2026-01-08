/* checks that api key is configured */

import axios from 'axios';
import ApiKeyError from '../middlewares/errors/api-key-error.ts';

export const checkApiKeySvc = (): string => {

    // get api key from env
    const apiKey = process.env.STEAM_API_KEY;

    // check that api key is configured
    if (!apiKey) {
        throw new ApiKeyError();
    }

    return apiKey;

}