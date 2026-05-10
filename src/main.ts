import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from this origin
  });

  await app.listen(8080);
}
bootstrap();
