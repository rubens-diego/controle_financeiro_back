import { Controller, Post, Body } from '@nestjs/common';
import { GenerateDataService } from './generate-data.service';
import { CreateGenerateDatumDto } from './dto/create-generate-datum.dto';

@Controller('generate/database')
export class GenerateDataController {
  constructor(private readonly generateDataService: GenerateDataService) {}

  @Post()
  create(@Body() createGenerateDatumDto: CreateGenerateDatumDto) {
    return this.generateDataService.create(createGenerateDatumDto);
  }
}
