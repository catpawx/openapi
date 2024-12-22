import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeptModule } from './dept/dept.module';

@Module({
  imports: [UserModule, DeptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
