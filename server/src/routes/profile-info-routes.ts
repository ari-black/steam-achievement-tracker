
import { Router } from "express";
import { getProfileInfo } from "../controllers/profile-info-controller.ts";

const router: Router = Router();

// route to get profile info by steamId
router.get("/:steamId", getProfileInfo);

export default router;