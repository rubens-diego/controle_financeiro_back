import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
//import * as bcrypt from 'bcrypt';
import { AuthService } from '../../auth/auth.service';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { CreateTokenDto } from './dto/createToken.dto';
import { UserDto } from './dto/user.dto';
import { v4 as uuid } from 'uuid';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(  
    private readonly repository: UsersRepository,
    private readonly authService: AuthService,
  ) {}

  public async signup(signupDto: SignupDto) /*: Promise<User> */ {
   
    return "criar usuario"   ;
  }

   public async findAll() /*: Promise<User[]>*/ {
     return this.repository.findAll()
   }




  public async signin({ user, password }: SigninDto): Promise<CreateTokenDto> {
    let login: UserDto | undefined;
    const date = new Date();
    const refreshTokenrash = uuid();

    if (user === '' || password === '') {
      throw new BadRequestException('User or Password not completed!');
    }

    login = await this.repository.findByUserName(user);

    if (!login) {
      throw new BadRequestException('User or Password not Exists!');
    }

    if (login.password !== password) {
      throw new BadRequestException('User or Password not Exists!');
    }

    const jwtToken = await this.authService.createAccessToken( String(login.id)
      //{
     // userId: login.id,
      // nameUser: login.userName,
      // admin: login.userAdmin,
      // active: login.active,
      // blocked: login.blocked,
      // peopleIdFk: login.peopleIdFk ? login.peopleIdFk : null

    //}
    );

    if (!jwtToken) {
      throw new BadRequestException('Not Menus of users!');
    }

    //#region =================create refresh token ===========

    date.setMonth(new Date().getMonth() + 1);

    login.refreshToken = refreshTokenrash;

    login.dataValidRefreshToken = date;
    const updateUserToken = await this.repository.updateRefreshToken({
      id: Number(login.id),
      dataValidRefreshToken: date,
      refreshToken: refreshTokenrash,
    });



    if (!updateUserToken) {
      throw new BadRequestException('Erro in refreh token!');
    }

    if (!updateUserToken?.refreshToken) {
      throw new BadRequestException('Erro in refreh token no registred!');
    }

    if (!jwtToken) {
      throw new BadRequestException('Error in token!');
    }

    return {
      userId: login.id,
      userName: login.userName,
      admin: login.userAdmin ? login.userAdmin : false,
      active: login.active ? login.active : false,
      blocked: login.blocked ? login.blocked : false,
      authorization: jwtToken,
      refreshToken: String(updateUserToken.refreshToken),
    };
  }


}
