import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductCreateDTO } from "./dto/productCreate.dto";
import { ProductEntity } from "./product.entity";
import { randomUUID } from "crypto";
import { ProductService } from "./product.service";
import { ProductUpdateDTO } from "./dto/productUpdate.dto";
import { ProductListDTO } from "./dto/productList.dto";

@Controller('/products')
export class ProductController {

    constructor(
        private readonly productRepository: ProductRepository,
        private readonly productService: ProductService,
        ) {}
    
    @Get()
    async getProduct() {
        return this.productRepository.getProducts();
    }

    @Post()
    async createProduct(@Body() productData: ProductCreateDTO) {

        const product = new ProductEntity();

        product.id = randomUUID();
        product.name = productData.name;
        product.userId = productData.userId;
        product.description = productData.description;
        product.category = productData.category;
        product.quantity = productData.quantity;
        product.value = productData.value;

        await this.productService.createProduct(product);
        return {
            product: new ProductListDTO(product.id, product.name),
            message: 'Product created successfully'
        };
    }

    @Delete()
    async deleteProduct(@Param('id') id: string) {
        const productDeleted = await this.deleteProduct(id);
        return {
            product: productDeleted,
            message: 'Product deleted successfully'
        };
    }

    @Put('/:id')
    async updateProduct(
        @Param('id') id: string,
        @Body() product: ProductUpdateDTO) {
        const productUpdated = await this.updateProduct(id, product);
        
        return {
            user: productUpdated,
            message: 'Product updated successfully',
        };
    }
}