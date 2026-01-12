
import { Router } from "express";
import { getGameInfo } from "../controllers/game-info-controller.ts";
import { getUserGameInfo } from "../controllers/user-game-info-controller.ts";

const router: Router = Router();

// route to get general game info
router.get("/:gameId", getGameInfo);

// route to get game info for a steam id
router.get("/:steamId/:gameId", getUserGameInfo);

export default router;