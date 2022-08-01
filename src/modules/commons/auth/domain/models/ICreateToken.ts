export interface ICreateToken {
    userName: string;
    admin: boolean;
    active: boolean;
    blocked: boolean;
    authorization: string;
    refreshToken: string;
}
