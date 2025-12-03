import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
// import { RedisModule } from './redis/redis.module'; // Redis package not compatible
import { AuthModule } from './auth/auth.module';
import { CardsModule } from './cards/cards.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, /* RedisModule, */ AuthModule, CardsModule, CollectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
