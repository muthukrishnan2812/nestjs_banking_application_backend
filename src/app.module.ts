import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'banking_db',
      autoLoadEntities: true,
      synchronize: true, // dev only
    }),
     UserModule,
     AccountsModule,
     TransactionModule,
  ]
})
export class AppModule {}
