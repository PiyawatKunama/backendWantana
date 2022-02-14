import { ProblemClothesService } from './../problem-clothes/problem-clothes.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateKey } from 'src/global/generateKey';
import { SortClothesService } from 'src/sort-clothes/sort-clothes.service';
import { TypeClothesService } from 'src/type-clothes/type-clothes.service';
import { Entity, Repository } from 'typeorm';
import { CreateClotheInput } from './dto/create-clothe.input';
import { UpdateClotheInput } from './dto/update-clothe.input';
import { Clothe } from './entities/clothe.entity';
import { Relations } from './relations';
import { SpecialClothesService } from 'src/special-clothes/special-clothes.service';
import { OrdersService } from 'src/orders/orders.service';
import { CreateClotheProblemInput } from './dto/create-clothe-problem.input';
import { ClotheHasProblem } from './entities/clotheHasProblem.entity';
import { FilterClotheInput } from './dto/filter.input';

@Entity()
@Injectable()
export class ClothesService {
    constructor(
        @InjectRepository(Clothe)
        private clothesRepository: Repository<Clothe>,
        @InjectRepository(ClotheHasProblem)
        private clotheHasProblemsRepository: Repository<ClotheHasProblem>,
        private typeClothesService: TypeClothesService,
        private sortClothesService: SortClothesService,
        private problemClothesService: ProblemClothesService,
        private specialClothesService: SpecialClothesService,
        @Inject(forwardRef(() => OrdersService))
        private ordersService: OrdersService,
    ) {}

    async createClotheHasProblem(createClotheProblem: CreateClotheProblemInput) {
        for (let i = 0; i < createClotheProblem.clotheIds.length; i++) {
            const newClotheProblem = this.clotheHasProblemsRepository.create({
                status: createClotheProblem.status,
            });
            const cloth = await this.findOne(createClotheProblem.clotheIds[i]);
            newClotheProblem.clothe = cloth;

            const problemClothe = await this.problemClothesService.findOne(
                createClotheProblem.problemClothes,
            );
            newClotheProblem.problemClothe = problemClothe;

            await this.clotheHasProblemsRepository.save(newClotheProblem);
        }
    }

    async create(createClotheInput: CreateClotheInput) {
        const newClothe = this.clothesRepository.create(createClotheInput);

        if (createClotheInput.typeClotheId) {
            const typeClothe = await this.typeClothesService.findOne(
                createClotheInput.typeClotheId,
            );
            newClothe.typeClothe = typeClothe;
        }
        if (createClotheInput.sortClotheId) {
            const sortClothe = await this.sortClothesService.findOne(
                createClotheInput.sortClotheId,
            );
            newClothe.sortClothe = sortClothe;
        }

        if (createClotheInput.specialClothId) {
            const specialClothe = await this.specialClothesService.findOne(
                createClotheInput.specialClothId,
            );
            newClothe.specialClothe = specialClothe;
        }

        const order = await this.ordersService.findOne(createClotheInput.orderId);
        newClothe.order = order;

        const lastRecord = await this.clothesRepository.find({
            order: { id: 'DESC' },
            take: 1,
        });

        newClothe.key = generateKey(lastRecord, 'CL');

        return await this.clothesRepository.save(newClothe);
    }

    async findAll(): Promise<Clothe[]> {
        return await this.clothesRepository.find(Relations);
    }

    async findOne(id: number): Promise<Clothe> {
        return await this.clothesRepository.findOneOrFail(id, Relations);
    }

    async filter(filterClotheInput: FilterClotheInput) {
        const clothesQuery = this.clothesRepository
            .createQueryBuilder('clothes')
            .leftJoinAndSelect('clothes.order', 'order')
            .leftJoinAndSelect('clothes.typeClothe', 'typeClothe')
            .leftJoinAndSelect('clothes.sortClothe', 'sortClothe')
            .leftJoinAndSelect('clothes.specialClothe', 'specialClothe')
            .leftJoinAndSelect('clothes.clotheHasProblems', 'clotheHasProblems')
            .leftJoinAndSelect('clotheHasProblems.problemClothe', 'problemClothe');

        if (filterClotheInput) {
            const { typeName, sortName, spacialName } = filterClotheInput;

            if (typeName) {
                clothesQuery.andWhere('typeClothe.name = :name', {
                    name: typeName,
                });
            }

            if (sortName) {
                clothesQuery.andWhere('sortClothe.name = :name', {
                    name: sortName,
                });
            }

            if (spacialName) {
                clothesQuery.andWhere('specialClothe.name = :name', {
                    name: spacialName,
                });
            }
        }

        const queryClothe: any = await clothesQuery.getMany();

        let filterClothe = queryClothe;
        if (filterClotheInput.haveProblems === true) {
            if (queryClothe.length) {
                filterClothe = queryClothe.filter((clothe) => {
                    if (clothe.clotheHasProblems.length) {
                        return clothe;
                    }
                });
            }
        }
        if (filterClotheInput.haveProblems === false) {
            if (queryClothe.length) {
                filterClothe = queryClothe.filter((clothe) => {
                    if (!clothe.clotheHasProblems.length) {
                        return clothe;
                    }
                });
            }
        }

        return filterClothe;
    }

    update(ids: number[], updateClotheInput: UpdateClotheInput) {
        const updateClothe = this.clothesRepository.create(updateClotheInput);
        ids.forEach(async (id) => {
            await this.clothesRepository.update(id, updateClothe);
        });
    }

    async remove(id: number) {
        return await this.clothesRepository.delete(id);
    }
}
