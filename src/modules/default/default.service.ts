import { Injectable } from '@nestjs/common';
import { CreateDefaultDto } from './dto/create-default.dto';
import { UpdateDefaultDto } from './dto/update-default.dto';

@Injectable()
export class DefaultService {
  create(createDefaultDto: CreateDefaultDto) {
    console.log(createDefaultDto);
    return { status: 'This action adds a new default' };
  }

  findAll() {
    return { status: `This action returns all default` };
  }

  findOne(id: number) {
    return { status: `This action returns a #${id} default` };
  }

  update(id: number, updateDefaultDto: UpdateDefaultDto) {
    console.log(updateDefaultDto);
    return { status: `This action updates a #${id} default}` };
  }

  remove(id: number) {
    return { status: `This action removes a #${id} default` };
  }
}
