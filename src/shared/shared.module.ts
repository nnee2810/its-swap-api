import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import * as Joi from "joi"
import { EnvPayload } from "src/interfaces/env-payload.interface"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object<EnvPayload, true>({
        NODE_ENV: Joi.string().required(),
        PORT: Joi.number().required(),

        REDIS_HOST: Joi.string().required(),
        REDIS_PORT: Joi.number().required(),
      }),
    }),
    // CacheModule.registerAsync({
    //   isGlobal: true,
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService<EnvPayload>) => ({
    //     store: redisStore,
    //     host: configService.get<string>("REDIS_HOST"),
    //     port: configService.get<string>("REDIS_PORT"),
    //     ttl: 10,
    //   }),
    // }),
  ],
})
export class SharedModule {}
