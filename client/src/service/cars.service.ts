import {createEffect} from "effector";
import {httpGetCarsByFilter, httpPostCar} from "../api";
import {CommonRequestsQueryModel} from "../models/request/common-requests.model";
import {CarsModelRequestsBody} from "../models/request/cars-requests.model";

interface FetchServiceCar {
    query: CommonRequestsQueryModel,
    params: CarsModelRequestsBody.postFilter
}

// Получить машины с бд
export const fetchCarsService = createEffect(
    async ({query, params}: FetchServiceCar) => {
        try {

            const response = await httpGetCarsByFilter(query, params)

            return response.data

        } catch (e) {
            console.log(e)
        }
    })


// Создание машины
export const postCarService = async (params: CarsModelRequestsBody.post) => {
    try {

        await httpPostCar(params)

    }catch (e) {
        console.log(e)
    }
}