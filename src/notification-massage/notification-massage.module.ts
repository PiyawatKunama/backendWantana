import { Module } from '@nestjs/common';
import { NotificationMassageService } from './notification-massage.service';
import { NotificationMassageResolver } from './notification-massage.resolver';
import { NotificationMassage } from './entities/notification-massage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([NotificationMassage])],
    providers: [NotificationMassageResolver, NotificationMassageService],
})
export class NotificationMassageModule {}
