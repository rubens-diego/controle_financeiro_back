import { RefreshTokenService } from '@modules/commons/auth/services/RefreshTokenService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RefreshTokenController {
    public async refresh(request: Request, response: Response) {
        //const authorization: string  = String(request.headers.authorization)
        const refreshToken: string = String(request.headers.refreshtoken);

        const refresh = container.resolve(RefreshTokenService);
        const ret = await refresh.execute(refreshToken);

        return response.json(ret);
    }
}
