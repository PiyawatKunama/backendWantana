import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from 'src/global/enum/status';
import generateKey from 'src/global/generateKey';
import { Repository } from 'typeorm';
import { CreateNotificationMassageInput } from './dto/create-notification-massage.input';
import { UpdateNotificationMassageInput } from './dto/update-notification-massage.input';
import { NotificationMassage } from './entities/notification-massage.entity';

@Injectable()
export class NotificationMassageService {
    constructor(
        @InjectRepository(NotificationMassage)
        private notificationMassageRepository: Repository<NotificationMassage>,
    ) {}

    async create(createNotificationMassageInput: CreateNotificationMassageInput) {
        const newEmployee = this.notificationMassageRepository.create(
            createNotificationMassageInput,
        );

        const lastRecord = await this.notificationMassageRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newEmployee.key = generateKey(lastRecord, 'NM');

        return await this.notificationMassageRepository.save(newEmployee);
    }

    async findAll(): Promise<NotificationMassage[]> {
        return await this.notificationMassageRepository.find();
    }

    async findOne(id: number): Promise<NotificationMassage> {
        return await this.notificationMassageRepository.findOneOrFail(id);
    }

    async update(
        id: number,
        updateNotificationMassageInput: UpdateNotificationMassageInput,
    ) {
        const updateEmployee = this.notificationMassageRepository.create(
            updateNotificationMassageInput,
        );
        return await this.notificationMassageRepository.update(id, updateEmployee);
    }

    async remove(id: number) {
        return await this.notificationMassageRepository.delete(id);
    }

    async getMassageByStatus(status: Status) {
        const notificationMassage = await this.notificationMassageRepository.findOne(
            {
                where: { status },
            },
        );
        return notificationMassage.Massage;
    }
}
