declare namespace Express {
    export interface Request {
        decoded: {
            id: number;
            nameUser: string;
            admin: string;
            active: string;
            blocked: string;
            role: number | undefined | null;
            peopleIdFk: number | undefined | null;
        };
    }
}
