import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePersonDto } from '../dto/create-person.dto';
import { Person } from '../entities/person.entity';

@Injectable()
export class PeopleRepository {
  @Inject('PEOPLE_REPOSITORY')
  private peopleRepository: Repository<Person>;

  async findAll() {
    return this.peopleRepository.find();
  }

  async findOne(id: number) {
    return this.peopleRepository.find({
      where: { id },
      relations: ['address', 'email', 'phone'],
    });
  }

  public async create(data: CreatePersonDto) {
    const peopleCreate: any = this.peopleRepository.create({
      namePeople: data.name,
      surnamePeople: data.surname,
      cpf: data.cpf,
      birthdayDate: data.birthdayDate,

  
    });
    return this.peopleRepository.save(peopleCreate);
  }
}
