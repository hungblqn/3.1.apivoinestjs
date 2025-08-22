import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription('RESTful API for managing tasks')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
  // eslint-disable-next-line no-console
  console.log(`Swagger docs at http://localhost:${process.env.PORT || 3000}/docs`);
}
bootstrap();
