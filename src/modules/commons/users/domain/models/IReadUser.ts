export interface IReadUser {
    id: number;
    userName: string;
    active: boolean;
    blocked: boolean;
    userAdmin: boolean;
    typeUserIdFk?: number;
    peopleIdFk?: number | null;
}
