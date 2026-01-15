/* gets game info and user-related game stats */

import axios from 'axios';
import ApiKeyError from '../middlewares/errors/api-key-error.ts';
import { type GameInfo } from '../models/game-info-model.ts';
import NoDataError from '../middlewares/errors/no-data-error.ts';


/* general game info */

export const getGameInfoSvc = async (gameId: string):
    Promise<GameInfo | void> => {

 
    // set base and full url
    const baseUrl = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?';
    const url = `${baseUrl}&gameid=${gameId}`;

    console.log('Fetching game info from URL:', url);

   
    // make request to steam api
    const response = await axios.get(url)
        .catch(function () {
            throw new NoDataError({ message: 'no game info found for the given gameId' });
        });

    // parse the response to extract achievements
    const apiRes = response.data.achievementpercentages.achievements;

    const gameInfo: GameInfo = {
        gameId,
        name: "",
        achievements: [],
        playtimeForever: 0,
        imgIconUrl: "",
        imgLogoUrl: "",
    };


    return apiRes;
}

// const getAchievements = async (gameId: string) => Promise<GameInfo | void> => {
    
// }






/* user-related game stats */

// GetUserStatsForGame (v0002)
// GetPlayerAchievements (v0001)

