import {Router} from 'express'
import {carsController} from "../controllers/cars.controller";

const router = Router()

router.get('/', carsController.getAll.bind(carsController))
router.post('/', carsController.create.bind(carsController))
router.post('/filter', carsController.filter.bind(carsController))



export {router}