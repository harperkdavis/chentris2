import { Rules } from './tetris';

export interface Match {
    code: string,
    joinCode: string,
    playing: boolean,

    options: MatchOptions,
    rules: Rules,

    leader: string,
    
    players: Array<string>,
    order: Array<string>,

    notification: string,
    newNotification: boolean,

    started: number,
    ended: number,

    data: object,
    ready: object,
    boards: object,
    states: object,
    kills: object,
    garbageBuffer: object,

    startCountdown: number,

    lastRemaining: number,

    solo: boolean,
    ending: boolean,
    over: boolean,

    matchOverDelay: number,

    results: MatchResults,
}

export interface MatchOptions {
    public: boolean,
    allowJoining: boolean,
    ranked: boolean,
}

export interface MatchResults {
    winner: string,
    rewards: object,
}
