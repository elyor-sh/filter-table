import {createEvent, createStore} from "effector";
import React from "react";
import {CarsModelRequestsBody} from "../models/request/cars-requests.model";

const initialParams: CarsModelRequestsBody.post = {
    count: 0,
    name: '',
    distance: 0,
}

export const setCarsCreateParams = createEvent<React.ChangeEvent<HTMLInputElement>>()
export const resetCarsCreateParams = createEvent()

export const $carsCreateParams = createStore(
    {...initialParams}
)
    .on(setCarsCreateParams, (prev, event) => {
        return {
            ...prev,
            [event.target.name]: event.target.value
        }
    })
    .reset(resetCarsCreateParams)
