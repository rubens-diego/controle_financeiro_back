

export interface UserDto {
    id: number;
    userName: string;
    password: string;
    active?: boolean;
    blocked?: boolean;
    refreshToken?: string;
    dataValidRefreshToken?: Date;
    email: string
    userAdmin?: boolean;
    peopleIdFk?: number | null;
    created_at?: Date;
    updated_at?: Date;
    people?: any;
}
