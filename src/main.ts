import { NestFactory } from '@nestjs/core';
import { config } from '@common/config';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
}

// eslint-disable-next-line no-void
void bootstrap();
