import {Request, Response} from 'express'
import {carsService, CarsServiceClass} from "../services/cars.service";
import {CarsCreateDto, CarsFilterDto, CarsFilterDtoInterface} from "../dto/cars.dto";
import {CommonQueryDto} from "../dto/common.dto";

class CarsControllerClass {

    constructor(private readonly carsService: CarsServiceClass) {
    }

    getFilterParams (type: CarsFilterDtoInterface.type, param: CarsFilterDtoInterface.filterParam, text: string) {
        let requestStr = ''

        switch (type) {
            case 'equal':
                requestStr = `WHERE ${param} = ${isNaN(Number(text)) ? `'${text}'` : Number(text)}`
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
                requestStr = `WHERE ${param} < ${isNaN(Number(text)) ? `'${text}'` : Number(text)}`
                break
            case 'more':
                requestStr = `WHERE ${param} > ${isNaN(Number(text)) ? `'${text}'` : Number(text)}`
                break
            default:
                break
        }

        return requestStr
    }

    async getAll(req: Request, res: Response) {
        try {

            const cars = await this.carsService.getAll()

            res.json({items: cars})

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async create(req: Request, res: Response) {
        try {

            const {name, count, distance}: CarsCreateDto = req.body

            const car = await this.carsService.create({name, count, distance, date: new Date()})

            res.json({items: car})

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async filter(req: Request, res: Response) {
        try {

            const {offset, rowCount} = new CommonQueryDto(req.query)

            const {filterParam, type, text}: CarsFilterDto = req.body

            let sqlRequest = `SELECT * FROM cars `

            if (type && filterParam && text) {
                sqlRequest += this.getFilterParams(type, filterParam, text)
            }

            sqlRequest = sqlRequest + ` LIMIT ${rowCount} OFFSET ${offset}`


            const cars = await this.carsService.filter(sqlRequest)

            res.json({items: cars})

        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}

export const carsController = new CarsControllerClass(carsService)