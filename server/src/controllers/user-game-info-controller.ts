
import { type Request, type Response } from 'express';
import { checkApiKeySvc } from '../services/check-api-key-service.ts';
import { getUserGameInfoSvc } from '../services/user-game-info-service.ts';

export const getUserGameInfo = async (req: Request, res: Response): Promise<void> => {

    const apiKey = checkApiKeySvc();

    // const userGameInfo = await getUserGameInfoSvc(res, req.params.steamID, req.params.gameId, apiKey);
    // res.json(userGameInfo);

}