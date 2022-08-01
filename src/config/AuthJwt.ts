import { IUser } from '@modules/commons/users/domain/models/IUser';
import jwt from 'jsonwebtoken';

export default class AuthJwt {
    async createToken(user: IUser) {
        const token = jwt.sign(
            {
                id: user.id,
                nameUser: user.userName,
                admin: user.userAdmin,
                active: user.active,
                blocked: user.blocked,
                peopleIdFk: user.peopleIdFk ? user.peopleIdFk : '',
            },
            String(process.env.JWT_TOKEN),
            { expiresIn: process.env.JWT_EXPIRATION },
        );
        return token;
    }
}
