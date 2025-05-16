import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set view engine as pug
  app.setViewEngine('pug');

  // Set the base views directory
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Start the server on the configured port
  await app.listen(process.env.PORT || 4000);
}

bootstrap();
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI:', process.env.MONGO_URI);

