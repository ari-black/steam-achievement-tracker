
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';
import { type ProfileInfo } from '../models/profile-info-model.ts';
import { type Request, type Response } from 'express';


export const getProfileInfoSvc = async (steamId: string): Promise<ProfileInfo | number> => {

    // steam id
    if (!steamId) {
        //res.status(400).json({ error: 'steamId parameter is required' });
        return 400;
    }

    // get api key from env
    const apiKey = process.env.STEAM_API_KEY;
    if (!apiKey) {
        //res.status(500).json({ error: 'steam api key is not configured' });
        return 500;
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

    // store in ProfileInfo object
    const profileInfo: ProfileInfo = {
        steamId,
        displayName: apiRes.personaname,
        profileUrl: apiRes.profileurl,
        photo: apiRes.avatar,
    };

    return profileInfo
}