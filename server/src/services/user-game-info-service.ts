
import axios from "axios";
import { type UserGameInfo } from "../models/user-game-info-model.ts";

export const getUserGameInfoSvc = async (
    
    steamId: string,
  
    gameId: string,
    apiKey: string
): Promise<UserGameInfo | void> => {
    // make request to steam api
}