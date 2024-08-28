import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products = [];

    async getProducts() {
        return this.products;
    }

    async createProduct(product) {
        this.products.push(product);
    }

}