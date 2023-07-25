import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import helmet from "helmet"
import { AppModule } from "./app.module"
import { ResponseInterceptor } from "./interceptors/response.interceptor"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

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

  await app.listen(3000)
}
bootstrap()
