import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigServivce } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProductModule,
    ConfigModule.forRoot({
      isGlobal: true,

    }), 
    TypeOrmModule.forRootAsync({ 
      useClass: PostgresConfigServivce,
       inject: [PostgresConfigServivce]
      })
    ],
  providers: []
})
export class AppModule {}
