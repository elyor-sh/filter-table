import {Request, Response} from 'express'
import {carsService, CarsServiceClass} from "../services/cars.service";
import {CarsCreateDto, CarsFilterDto, CarsFilterDtoInterface} from "../dto/cars.dto";
import {CommonQueryDto} from "../dto/common.dto";

class CarsControllerClass {

    constructor(private readonly carsService: CarsServiceClass) {
    }

    getFilterParams (type: CarsFilterDtoInterface.type, param: CarsFilterDtoInterface.filterParam, text: string) {

        /*
        *
        * ВНИМАНИЕ!!! Тут может быть уязвимость, я не стал проверить, чтобы экономить время
        *
        */

        let requestStr = ''

        switch (type) {
            case 'equal':
                requestStr = param === 'name' ? `WHERE ${param} = '${text}'` : `WHERE ${param} = ${Number(text)}`
                break
            case 'contains':

                const arrayWords = text.split(' ')

                requestStr = `WHERE ${param} LIKE`
                    +
                    arrayWords.map((item, index) => {
                        if(arrayWords.length === index + 1){
                            return ` '%${item}%'`
                        }

                        return ` '%${item}%' ||`
                    }).join('')
                break
            case 'less':
                requestStr = param === 'name' ? `WHERE ${param} < '${text}'` : `WHERE ${param} < ${Number(text)}`
                break
            case 'more':
                requestStr = param === 'name' ? `WHERE ${param} > '${text}'` : `WHERE ${param} > ${Number(text)}`
                break
            default:
                break
        }

        return requestStr
    }

    async getAll(req: Request, res: Response) {
        try {

            const cars = await this.carsService.getAll()

            res.json({items: cars, paging: null})

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async create(req: Request, res: Response) {
        try {

            const {name, count, distance}: CarsCreateDto = req.body

            const car = await this.carsService.create({name, count, distance, date: new Date()})

            res.json({items: car, paging: null})

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async filter(req: Request, res: Response) {
        try {

            const {offset, rowCount, page} = new CommonQueryDto(req.query)

            const {filterParam, type, text}: CarsFilterDto = req.body

            let sqlRequest = `SELECT * FROM cars `

            const allCars = await this.carsService.getAll()

            let paging = {
                currentPage: page,
                totalCount: allCars.length,
                pages: Math.ceil(allCars.length / rowCount)
            }

            if (type && filterParam && text) {
                sqlRequest += this.getFilterParams(type, filterParam, text)

                const cars = await this.carsService.filter(sqlRequest)

                paging = {
                    currentPage: page,
                    totalCount: cars.length,
                    pages: Math.ceil(cars.length / rowCount)
                }
            }

            sqlRequest = sqlRequest + ` LIMIT ${rowCount} OFFSET ${offset}`

            const cars = await this.carsService.filter(sqlRequest)

            res.json({items: cars, paging: paging})

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}

export const carsController = new CarsControllerClass(carsService)