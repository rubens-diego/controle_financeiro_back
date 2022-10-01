import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/createUser.dto";
import { UpdateRefreshTokenDto } from "../dto/updateRefreshToken.dto";
import { UserDto } from "../dto/user.dto";
import Users from "../entities/users.entity";

@Injectable()
export class UsersRepository {
  @Inject("USER_REPOSITORY")
  private usersRepository: Repository<Users>;

  async findAll() {
    return this.usersRepository.find({
      //relations: [],
    });
  }

  async findByUserName(userName: string): Promise<UserDto | undefined> {
    const user: any = await this.usersRepository.findOne({
      where: {
        userName: userName,
      },
    });

    return user;
  }
  public async findById(id: number): Promise<UserDto> {
    const user: any = await this.usersRepository.findOne({
      where: {
        id: id,
      },
    });

    return user;
  }

  public async create(data: CreateUserDto): Promise<UserDto> {
    const user: any = await this.usersRepository.save({
      userName: String(data.userName),
      password: String(data.password),
      roleIdFk: Number(data.idRole),
    });

    return user;
  }

  public async updateRefreshToken(
    user: UpdateRefreshTokenDto,
  ): Promise<UserDto> {
    //return await this.ormRepository.save(user);
    user.id;
    user.refreshToken;

    const userRepo: any = await this.usersRepository.save({
      id: user.id,
      dataValidRefreshToken: user.dataValidRefreshToken,
      refreshToken: user.refreshToken,
    });

    userRepo.refreshToken = userRepo.refreshToken;

    return userRepo;
  }

  public async findByUserRefreshToken(
    refreshToken: string,
  ): Promise<UserDto | undefined> {
    const user: any = await this.usersRepository.findOne({
      where: {
        refreshToken: refreshToken,
      },
    });

    return user;
  }

  public async findByIdUserByPeople(id: number): Promise<UserDto | undefined> {
    return undefined;
  }
}
