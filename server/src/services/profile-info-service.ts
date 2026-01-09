/* gets basic profile info for a user */

import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import { type ProfileInfo } from '../models/profile-info-model.ts';
import { type Request, type Response } from 'express';
import { AppError } from '../middlewares/errors/error.ts';
import ApiKeyError from '../middlewares/errors/api-key-error.ts';
import ArgumentError from '../middlewares/errors/argument-error.ts';
import NoDataError from '../middlewares/errors/no-data-error.ts';

export const getProfileInfoSvc = async (res: Response, steamId: string, apiKey: string):
    Promise<ProfileInfo | void> => {


    // set base and full url
    const baseUrl = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?';
    const url = `${baseUrl}key=${apiKey}&steamids=${steamId}`;

    console.log('Fetching profile info from URL:', url);

    // make request to steam api
    const response = await axios.get(url);

    // parse the response to extract profile info (player 0 is the requested user)
    const apiRes = response.data.response.players[0];
    console.log('Profile info response data:', apiRes);

    // handle case where no profile info is found
    if (!apiRes) {
        throw new NoDataError({ message: 'no profile info found for the given steamId' });
    }

    // store in ProfileInfo object
    const profileInfo: ProfileInfo = {
        steamId,
        displayName: apiRes.personaname,
        profileUrl: apiRes.profileurl,
        photo: apiRes.avatar,
    };

    return profileInfo;
}