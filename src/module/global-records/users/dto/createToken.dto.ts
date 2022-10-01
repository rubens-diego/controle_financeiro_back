export interface CreateTokenDto {
    userId : number
    userName: string;
    admin: boolean;
    active: boolean;
    blocked: boolean;
    authorization: string;
    refreshToken: string;
}
