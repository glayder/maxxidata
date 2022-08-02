import { PartialType } from '@nestjs/mapped-types';
import { ProfessionDto } from './create-profession.dto';

export class UpdateProfessionDto extends PartialType(ProfessionDto) {}
