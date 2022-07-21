import React from "react";
import {createEvent, createStore} from "effector";
import {toast} from "react-toastify";
import {CarsModel} from "../models/response/cars-response.model";
import {fetchCarsService} from "../service/cars.service";
import {CarsModelRequestsBody} from "../models/request/cars-requests.model";

interface ChangeEventParams {
    key: string
    value: string
}

// Создаем события
export const handleChange = createEvent<ChangeEventParams>()
export const handleClear = createEvent()

// Массив машин
export const $cars = createStore([] as CarsModel[])
    .on(fetchCarsService.doneData, (_, payload) => payload)
    .on(fetchCarsService.fail, (_, __) => [])

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

    .on(handleClear, () => {

        return {
            filterParam: 'name',
            text: '',
            type: 'equal'
        }
    })


// При изменении поля записываем изменение в стор
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
export const handleClearCarsFilter = handleClear.prepend(() => {
    (async () => {
        await fetchCarsService(
            {
                query: {},
                params: {}
            }
        )
    })()
})


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