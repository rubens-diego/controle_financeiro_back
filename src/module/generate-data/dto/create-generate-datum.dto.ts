import { IsString } from "class-validator";

export class CreateGenerateDatumDto {

    @IsString()
    user: string
    @IsString()
    password: string
}
