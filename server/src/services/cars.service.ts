import {db} from "../database";
import {CarsCreateDto} from "../dto/cars.dto";
import {CarsEntity} from "../entities/cars";

export class CarsServiceClass {

    async getAll(): Promise<CarsEntity[]> {
        return await db.find()
    }

    async create (dto: CarsCreateDto): Promise<CarsEntity> {
        return await db.create(dto)
    }

    async filter (request: string) {
        return await db.filter(request)
    }
}

export const carsService = new CarsServiceClass()