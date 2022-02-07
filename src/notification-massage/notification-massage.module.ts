import { Module } from '@nestjs/common';
import { NotificationMassageService } from './notification-massage.service';
import { NotificationMassageResolver } from './notification-massage.resolver';
import { NotificationMassage } from './entities/notification-massage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationMassageDatum } from './entities/notification-massage-datum.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([NotificationMassage, NotificationMassageDatum]),
    ],
    providers: [NotificationMassageResolver, NotificationMassageService],
})
export class NotificationMassageModule {}
