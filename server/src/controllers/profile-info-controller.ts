
import { type Request, type Response } from 'express';
// import axios from 'axios';
import { type ProfileInfo } from '../models/profile-info.ts';

// Controller to handle profile info requests
// export const getProfileInfo = async (req: Request, res: Response): Promise<void> => {
//     const steamId = req.params.steamId;
//     // For demonstration, returning mock data
//     const mockProfileInfo: ProfileInfo = {
//         steamId,
//         displayName: 'MockUser',
//         profileUrl: `https://steamcommunity.com/id/MockUser/`,
//         photo: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/mock_avatar.jpg',
//     };
//     res.json(mockProfileInfo);
// }

// Controller to handle profile info requests
export const getProfileInfo = async (req: Request, res: Response): Promise<void> => {
    const steamId = req.params.steamId;
    if (!steamId) {
        res.status(400).json({ error: 'steamId parameter is required' });
        return;
    }
    // For demonstration, returning mock data
    const mockProfileInfo: ProfileInfo = {
        steamId,
        displayName: 'MockUser',
        profileUrl: `https://steamcommunity.com/id/MockUser/`,
        photo: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/mock_avatar.jpg',
    };
    res.json(mockProfileInfo);
}