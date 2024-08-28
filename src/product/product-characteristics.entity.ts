import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('product_characteristics')
export class ProductCharacteristic {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "name", length: 100, nullable: false })
    name: string;

    @Column({ name: "description", length: 100, nullable: false })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.product_characteristics,
    { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    product: ProductEntity;
}