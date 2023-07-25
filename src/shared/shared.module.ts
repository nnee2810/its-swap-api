import { CacheModule } from "@nestjs/cache-manager"
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import * as redisStore from "cache-manager-redis-store"
import * as Joi from "joi"
import { EnvPayload } from "src/interfaces/env-payload.interface"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object<EnvPayload, true>({
        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
      }),
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvPayload>) => ({
        store: redisStore,
        host: configService.get<string>("REDIS_HOST"),
        port: configService.get<string>("REDIS_PORT"),
        ttl: 10,
      }),
    }),
  ],
})
export class SharedModule {}
