import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CatDetailEnum } from './app.controller';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  try {
    fs.writeFileSync(
      `${__dirname}/../swagger.json`,
      JSON.stringify(document, null, 4),
    );
  } catch (e) {
    console.error(e);
  }

  await app.listen(3000);
}
bootstrap();
