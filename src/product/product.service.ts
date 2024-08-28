import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ) {}

    async createProduct(product: ProductEntity) {
        await this.productRepository.save(product);
    }

    async updateProduct(id: string, product) {
        await this.productRepository.update(id, product);
    }

    async deleteProduct(id: string) {
        await this.productRepository.delete(id);
    }
}