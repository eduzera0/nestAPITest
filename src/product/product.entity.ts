import { Column } from "typeorm/decorator/columns/Column";
import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn";
import { DeleteDateColumn } from "typeorm/decorator/columns/DeleteDateColumn";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { ProductCharacteristic } from "./product-characteristics.entity";
import { ProductImage } from "./product_image.entity";
import { OneToMany } from "typeorm";

@Entity({ name: 'products'})
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ name: 'user_id', length: 100, nullable: false })
    userId: string;
    
    @Column({ name: 'name', length: 100, nullable: false })
    name: string;
    
    @Column({ name: 'value', nullable: false })
    value: number;
    
    @Column({ name: 'quantidade', nullable: false })
    quantity: number;
    
    @Column({ name: 'description', length: 255, nullable: false })
    description: string;
    
    @Column({ name: 'category', length: 100, nullable: false })
    category: string;
    
    @OneToMany(()=> ProductCharacteristic, (product_characteristics) => product_characteristics.product)
    product_characteristics: ProductCharacteristic[];

    @OneToMany(() => ProductImage, (product_images) => product_images.product)
    product_images: ProductImage[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}