import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChantierModule } from './chantier/chantier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandeModule } from './commande/commande.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'dev',
      password: 'glouglou',
      database: 'tuto_nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ChantierModule,
    CommandeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
