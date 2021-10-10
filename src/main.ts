import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {

  const port = process.env.PORT ? Number(process.env.PORT) : 7777

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Phonebook Api')
  .setDescription('Swagger spec for phonebook API')
  .setVersion('1.0')
  .addTag('Phonebook')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
  
}
bootstrap();
