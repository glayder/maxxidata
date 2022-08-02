import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Profession } from 'src/profession/entities/profession.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profession)
    private profissaoRepository: Repository<Profession>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const profissaoItem = this.profissaoRepository.findOneBy({
      id: createUserDto.tipoDeProfissional,
    });

    const user = new User();
    user.email = createUserDto.email;
    user.name = createUserDto.name;
    user.telefone = createUserDto.telefone;
    user.situacao = createUserDto.situacao;

    await profissaoItem.then((profissao) => {
      user.tipoDeProfissional_id = profissao.id;
      user.tipoDeProfissional = profissao;
    });

    console.log(user);

    this.userRepository.save(user);

    return user;
  }

  findAll() {
    return this.userRepository.find({
      relations: {
        tipoDeProfissional: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
