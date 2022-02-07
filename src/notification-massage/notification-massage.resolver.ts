import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationMassageService } from './notification-massage.service';
import { NotificationMassage } from './entities/notification-massage.entity';
import { CreateNotificationMassageInput } from './dto/create-notification-massage.input';
import { UpdateNotificationMassageInput } from './dto/update-notification-massage.input';
import { Status } from 'src/global/enum/status';
import { NotificationMassageDatum } from './entities/notification-massage-datum.entity';

@Resolver(() => NotificationMassage)
export class NotificationMassageResolver {
    constructor(
        private readonly notificationMassageService: NotificationMassageService,
    ) {}

    @Mutation(() => NotificationMassage)
    createNotificationMassage(
        @Args('createNotificationMassageInput')
        createNotificationMassageInput: CreateNotificationMassageInput,
    ) {
        return this.notificationMassageService.create(
            createNotificationMassageInput,
        );
    }

    @Query(() => [NotificationMassage])
    notificationMassages() {
        return this.notificationMassageService.findAll();
    }

    @Query(() => [NotificationMassageDatum])
    notificationMassageDatums() {
        return this.notificationMassageService.findAllDatum();
    }

    @Query(() => NotificationMassage, { name: '' })
    getNotificationMassage(@Args('id', { type: () => Int }) id: number) {
        return this.notificationMassageService.findOne(id);
    }

    @Mutation(() => NotificationMassage)
    updateNotificationMassage(
        @Args('updateNotificationMassageInput')
        updateNotificationMassageInput: UpdateNotificationMassageInput,
    ) {
        return this.notificationMassageService.update(
            updateNotificationMassageInput.id,
            updateNotificationMassageInput,
        );
    }

    @Mutation(() => NotificationMassage)
    removeNotificationMassage(@Args('id', { type: () => Int }) id: number) {
        return this.notificationMassageService.remove(id);
    }

    @Query(() => String)
    async getMassageByStatus(
        @Args('status', { type: () => Status }) status: number,
    ) {
        return await this.notificationMassageService.getMassageByStatus(status);
    }
}
