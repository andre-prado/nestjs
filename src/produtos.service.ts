import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [
    new Produto('LV001', 'Aprendendo NestJS', 50.0),
    new Produto('LV002', 'Aprendendo Typescript', 33.0),
    new Produto('LV003', 'Acordando vencedor', 99.0),
  ];

  getAll(): Produto[] {
    return this.produtos;
  }

  getOne(id: number): Produto {
    console.log(`getOne id: ${id}`);
    return this.produtos[0];
  }

  create(produto: Produto): Produto {
    this.produtos.push(produto);
    return produto;
  }

  update(id: number, produto: Produto): Produto {
    console.log(id);
    return produto;
  }

  delete(id: number): Produto {
    console.log(`deletando produto de id: ${id}`);
    return this.produtos.pop();
  }
}
