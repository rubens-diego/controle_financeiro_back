import { IsDate, IsObject, IsString } from 'class-validator';


export class CreatePersonDto {
    
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsString()
  cpf: string;
  @IsDate()
  birthdayDate: Date;

  @IsString()
  dd : string


  @IsString()
  telephone : string

}
