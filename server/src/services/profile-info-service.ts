
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import { type ProfileInfo } from '../models/profile-info-model.ts';
import { type Request, type Response } from 'express';
import { AppError } from '../middlewares/errors/error.ts';
import ApiKeyError from '../middlewares/errors/api-key-error.ts';


export const getProfileInfoSvc = async ( res: Response, steamId: string | undefined): Promise<ProfileInfo | void> => {

    // steam id
    if (!steamId || steamId.trim() === '') {
        res.status(400).json({ error: 'steamId parameter is required' });
        return;
    }

    // get api key from env
    // const apiKey = process.env.STEAM_API_KEY;
    const apiKey = '';
    if (!apiKey) {
        // res.status(403).json({ error: 'steam api key is not configured' });
        throw new ApiKeyError();
    }


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
        // res.status(404).json({ error: 'no profile info found for the given steamId' });
        res.status(404).json({ error: 'no profile info found for the given steamId' });

        return;
    }

    // store in ProfileInfo object
    const profileInfo: ProfileInfo = {
        steamId,
        displayName: apiRes.personaname,
        profileUrl: apiRes.profileurl,
        photo: apiRes.avatar,
    };

    return profileInfo
}