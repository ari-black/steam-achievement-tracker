
import { type Request, type Response } from 'express';
import { getProfileInfoSvc } from '../services/profile-info-service.ts';


// controller to handle profile info requests
export const getProfileInfo = async (req: Request, res: Response): Promise<void> => {

    const profileInfo = await getProfileInfoSvc(res, req.params.steamId);
    res.json(profileInfo);

}