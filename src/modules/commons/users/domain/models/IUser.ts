import { IPeople } from '@modules/commons/people/domain/models/IPeople';

export interface IUser {
    id: number;
    userName: string;
    password: string;
    active?: boolean;
    blocked?: boolean;
    refreshToken?: string;
    dataValidRefreshToken?: Date;
    roleIdFk: number;
    userAdmin?: boolean;
    typeUserIdFk?: number;
    peopleIdFk?: number | null;
    created_at?: Date;
    updated_at?: Date;
    people?: IPeople;
}
