import React from "react";
import {createEvent, createStore} from "effector";
import {CarsModel} from "../models/response/cars-response.model";
import {fetchCarsService} from "../service/cars.service";
import {CarsModelRequestsBody} from "../models/request/cars-requests.model";
import {toast} from "react-toastify";

interface ChangeEventParams {
    key: string
    value: string
}

// Массив машин
export const $cars = createStore([] as CarsModel[])
    .on(fetchCarsService.doneData, (_, payload) => payload)
    .on(fetchCarsService.fail, (_, __) => [])

// Создаем событие
export const handleChange = createEvent<ChangeEventParams>()
export const handleClear = createEvent()

// Параметры для фильтрации
export const $carFilterParams = createStore(
    {
        filterParam: 'name',
        text: '',
        type: 'equal'
    } as CarsModelRequestsBody.postFilter
)
    .on(handleChange, (filter, {key, value}: ChangeEventParams) => ({
        ...filter,
        [key]: value
    }))
    .on(handleClear, () => ({
        filterParam: 'name',
        text: '',
        type: 'equal'
    }))


//
export const handleChangeCarsFilter =
    handleChange.prepend(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => (
            {
                key: e.target.name,
                value: e.target.value
            }
        )
    )

// Очистить поля
export const handleClearCarsFilter = async () => {

    handleClear.prepend(() => {})

    await fetchCarsService(
        {
            query: {},
            params: {}
        }
    )
}

// Фильтрация машин
export const handleSearchCars = async () => {

    const params = $carFilterParams.getState()

    if(!params.text?.trim()){
        toast.info(`Запольните все поля!`, {
            toastId: 'searchFilterCars'
        })

        return
    }

    await fetchCarsService(
        {
            query: {},
            params: params
        }
    )
}