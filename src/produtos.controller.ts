import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  getAll(): Produto[] {
    return this.produtosService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): Produto {
    console.log(params);
    return this.produtosService.getOne(params.id);
  }

  @Post()
  create(@Body() produto): Produto {
    return this.produtosService.create(produto);
  }

  @Put(':id')
  update(@Body() produtoAtualizado, @Param() id): Produto {
    return this.produtosService.update(id, produtoAtualizado);
  }

  @Delete(':id')
  delete(@Param() produto): Produto {
    return this.produtosService.delete(produto.id);
  }
}
