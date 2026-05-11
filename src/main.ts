import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors({
    origin: 'https://spectacular-cactus-061095.netlify.app', // Allow requests from this origin
  });

  await app.listen(8080);
}
bootstrap();
