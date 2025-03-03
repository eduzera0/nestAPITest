import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: "product_images" })
export class ProductImage {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "url", length: 100, nullable: false})
    url: string;

    @Column({ name: "description", length: 100, nullable: false})
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.product_images,
    { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}