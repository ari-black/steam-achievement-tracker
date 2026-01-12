
import { type Request, type Response } from 'express';
import { checkApiKeySvc } from '../services/check-api-key-service.ts';
import { getGameInfoSvc } from '../services/game-info-service.ts';

export const getGameInfo = async (req: Request, res: Response): Promise<void> => {

    const apiKey = checkApiKeySvc();

    // const gameInfo = await getGameInfoSvc(res, req.params.steamID, req.params.gameId, apiKey);
    // res.json(gameInfo);

    // const gameInfo = await getGameInfoSvc(req.params.gameId!, apiKey);
    // res.json(gameInfo);

}    