import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import dbConfig from './config/db.config';
import serverConfig from './config/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [dbConfig, serverConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController], // TODO: 테스트 후 삭제
})
export class AppModule {}
