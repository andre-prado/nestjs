import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  getAll(): string {
    return 'todos os produtos';
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `retorna produto ${params.id}`;
  }

  @Post()
  create(@Body() produto): string {
    console.log(produto);
    return `created ${produto}`;
  }

  @Put()
  update(@Body() produtoAtualizado): string {
    console.log(produtoAtualizado);
    return `produto atualizado!`;
  }

  @Delete(':id')
  delete(@Param() produto): string {
    return `produto deletado ${produto}`;
  }
}
