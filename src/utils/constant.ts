export enum COMMON_ERRORS {
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    SERVER_ERROR = 'SERVER_ERROR',
    TOKEN_INVALID = 'TOKEN_INVALID',
    TOKEN_EXPIRED = 'TOKEN_EXPIRED',
    ROUTE_NOT_FOUND = 'ROUTE_NOT_FOUND'
}

export enum SESSION_STATUS {
    ON_GOING = 20,
    CLOSED = 30
}

export enum LOG_STATUS {
    VALID = 20,
    INVALID = 30
}

export enum EMBLEM_CODE {
    HERO_ONE = 'HERO_ONE',
    HERO_TWO = 'HERO_TWO',
    WARRIOR_PANDEMI = 'WARRIOR_PANDEMI',
    KUCING_AJA_KALAH = 'KUCING_AJA_KALAH',
    PRINCESS_WABAH = 'PRINCESS_WABAH',
    AQUA_VIRUS = 'AQUA_VIRUS',
    INFLUENCER = 'INFLUENCER',
    CORONA_HERO = 'CORONA_HERO'
}

export const MAX_HOME_RADIUS = 500;

export const CACHE_TTL = 300; // seconds

export const ICON = {
    HAPPY: 'https://dirumahaja.miloo.id/assets/img/notification/notification_02.png',
    SAD: 'https://dirumahaja.miloo.id/assets/img/notification/notification_01.png'
};
