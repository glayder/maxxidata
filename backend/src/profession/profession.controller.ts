import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';

@Controller('profissao')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Post()
  create(@Body() professionDto: ProfessionDto) {
    return this.professionService.create(professionDto);
  }

  @Get()
  findAll() {
    return this.professionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.professionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfessionDto: UpdateProfessionDto,
  ) {
    return this.professionService.update(+id, updateProfessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professionService.remove(+id);
  }
}
