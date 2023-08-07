import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import helmet from "helmet"
import { AppModule } from "./app.module"
import { ResponseInterceptor } from "./interceptors/response.interceptor"
import { EnvPayload } from "./interfaces/env-payload.interface"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService<EnvPayload>)

  app.use(helmet())
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  app.useGlobalInterceptors(new ResponseInterceptor())

  const swaggerConfig = new DocumentBuilder().setTitle("ITS Swap").build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup("docs", app, swaggerDocument)

  await app.listen(configService.get("PORT"))
}
bootstrap()
