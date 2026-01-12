
import { type Achievement } from './achievement-model.ts';

export interface UserGameInfo {
    gameId: string;          // appid
    name: string;          // name
    achievements: Achievement[];
    playtimeForever: number; // playtime_forever in minutes
    imgIconUrl: string;    // img_icon_url
    imgLogoUrl: string;    // img_logo_url
}