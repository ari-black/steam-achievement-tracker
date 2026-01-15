
import { type Request, type Response } from 'express';
import { getGameInfoSvc } from '../services/game-info-service.ts';

export const getGameInfo = async (req: Request, res: Response): Promise<void> => {

    const gameInfo = await getGameInfoSvc(req.params.gameId!);
    res.json(gameInfo);

}    