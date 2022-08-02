import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { Profession } from './entities/profession.entity';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(Profession)
    private profissaoRepository: Repository<Profession>,
  ) {}

  create(profissaoDto: ProfessionDto) {
    const profissao = new Profession();
    profissao.descricao = profissaoDto.descricao;
    profissao.situacao = profissaoDto.situacao;
    return this.profissaoRepository.save(profissao);
  }

  findAll() {
    return this.profissaoRepository.find();
  }

  findOne(id: number) {
    return 'This action adds a new profession';
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
