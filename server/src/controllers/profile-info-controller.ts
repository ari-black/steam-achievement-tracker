
import { type Request, type Response } from 'express';
import { getProfileInfoSvc } from '../services/profile-info-service.ts';
import { checkApiKeySvc } from '../services/check-api-key-service.ts';


// controller to handle profile info requests
export const getProfileInfo = async (req: Request, res: Response): Promise<void> => {

    const apiKey = checkApiKeySvc();

    const profileInfo = await getProfileInfoSvc(res, req.params.steamId!, apiKey);
    res.json(profileInfo);

}