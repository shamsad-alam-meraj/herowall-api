import { RedisModule as NestRedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NestRedisModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        config: {
          url: configService.getOrThrow<string>('app.redis.url'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class RedisModule {}
