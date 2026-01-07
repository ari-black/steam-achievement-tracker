
import { Router } from "express";
import { getProfileInfo } from "../controllers/profile-info-controller.ts";

const router: Router = Router();

// route to get profile info by steamId
router.get("/profile/:steamId", getProfileInfo);

// produces error due to missing steamId parameter
router.get("/profile/", getProfileInfo);


export default router;