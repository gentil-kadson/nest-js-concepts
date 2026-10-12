import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: { limit: string; offset: string }) {
    const { limit = 10, offset = 10 } = pagination;
    return this.recadosService.hello();
    return `Essa rota retorna todos os recados. Limit=${limit}, Offset=${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna o recado ID ${id}`;
  }

  @Post()
  create(@Body() body: { recado: string; novaChave: string }) {
    return body;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: { recado: string; atualizar: boolean },
  ) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota APAGA o recado ID ${id}`;
  }
}
