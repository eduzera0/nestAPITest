// class ListaCaracteristicaProdutoDTO {
//   nome: string;
//   descricao: string;
// }

// class ListaImagemProdutoDTO {
//   url: string;
//   descricao: string;
// }

export class ProductListDTO {
    constructor(readonly id: string, readonly name: string) {}
  }