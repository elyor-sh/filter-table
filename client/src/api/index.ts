import {stringify} from 'query-string'
import {httpRequest} from "./axios";
import {CommonRequestsQueryModel} from "../models/request/common-requests.model";
import {CarsModelRequestsBody} from "../models/request/cars-requests.model";
import {AxiosResponseType} from "./types";
import {CarsModel} from "../models/response/cars-response.model";

// Получение машин
export const httpGetCarsByFilter =
    (
        query: CommonRequestsQueryModel,
        params: CarsModelRequestsBody.postFilter
    ): AxiosResponseType<CarsModel[]> => httpRequest.post(`/cars/filter?${stringify(query)}`, params)

// Создание машины
export const httpPostCar =
    (
        params: CarsModelRequestsBody.post
    ): AxiosResponseType<CarsModel> => httpRequest.post(`/cars`, params)