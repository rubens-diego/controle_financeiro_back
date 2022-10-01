import { Injectable, Inject } from '@nestjs/common';

import { Person } from 'src/module/global-records/people/entities/person.entity';
import { Repository } from 'typeorm';

import { CreatePersonDto } from '../dto/create-person.dto';


@Injectable()
export class DataRepository {
  
  
  @Inject('PEOPLE_REPOSITORY')
  private peopleRepository: Repository<Person>;






  public async createPeople(data: CreatePersonDto) {
    const peopleCreate: any = this.peopleRepository.create({
      namePeople: data.name,
      surnamePeople: data.surname,
      cpf: data.cpf,
      birthdayDate: data.birthdayDate,

      
    });
    return this.peopleRepository.save(peopleCreate);
  }

}
