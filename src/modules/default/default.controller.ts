import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DefaultService } from './default.service';
import { CreateDefaultDto } from './dto/create-default.dto';
import { UpdateDefaultDto } from './dto/update-default.dto';
import { JwtAuthGuard } from '../auth/guards/jwt/jwt.guard';
import { Request } from 'express';
import { RolesGuard } from '../auth/guards/roles/roles.guard';
import { Rol } from '../auth/decorators/rol/rol.decorator';

@Controller('default')
export class DefaultController {
  constructor(private readonly defaultService: DefaultService) {}

  @Post()
  create(@Body() createDefaultDto: CreateDefaultDto) {
    return this.defaultService.create(createDefaultDto);
  }

  @Get()
  findAll() {
    return this.defaultService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Rol('user')
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: Request) {
    const { user } = req as any;
    console.log('default.findOne::user', user);
    return this.defaultService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultDto: UpdateDefaultDto) {
    return this.defaultService.update(+id, updateDefaultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultService.remove(+id);
  }
}
