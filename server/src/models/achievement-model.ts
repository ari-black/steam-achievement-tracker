
export interface Achievement {
    apiName: string;       // apiname
    name: string;          // name
    description: string;   // description
    achieved: boolean;     // achieved (true if 1, false if 0)
    unlockTime: number;    // unlocktime (unix timestamp)
}