import { Injectable } from '@nestjs/common';
import { dataPeople } from './Data/people-data';
import { CreateGenerateDatumDto } from './dto/create-generate-datum.dto';
import { CreatePersonDto } from './dto/create-person.dto';

import { DataRepository } from './repositories/data.repository';

@Injectable()
export class GenerateDataService {

  constructor(
    private readonly dataRepository: DataRepository
  ) { }

  async create(createGenerateDatumDto: CreateGenerateDatumDto) {
    //return 'This action adds a new generateDatum';
    //! senha : toor
    //!user: root
    
    
    await this.createPeople();
    console.log("Registos Criados!")

    return "Registos Criados!"

    
  }

  private async createPeople(): Promise<void> {
    try {


      for (const person of dataPeople) {
        const [dia, mes, ano] = String(person.data_nasc).split('/')

        const obj: CreatePersonDto = {
          name: person.nome,
          surname: person.nome,
          cpf: person.cpf.replace(/[^a-z0-9]/gi, ''),
          birthdayDate: new Date(Number(ano), Number(mes), Number(dia)),
          dd : "062",
          telephone: person.celular.replace(/[^a-z0-9]/gi, '').substring(2),
          

        }
        await this.dataRepository.createPeople(obj);
      }
    } catch (error) {
      console.log(error)
    }
  }


}
