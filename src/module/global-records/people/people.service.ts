import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PeopleRepository } from './repositories/people.repository';

@Injectable()
export class PeopleService {
  
  constructor(private readonly peopleRepository: PeopleRepository) {}

  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  public async findAll() {
    const listPeople = await this.peopleRepository.findAll();
    return listPeople;
  }

  public async findOne(id: number) {
    const listPeople = await this.peopleRepository.findOne(id);

    return listPeople;
  }


  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
