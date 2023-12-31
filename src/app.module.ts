import "dotenv/config.js";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    entities: [],
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
  }),
  UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
