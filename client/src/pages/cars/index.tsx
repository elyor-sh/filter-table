import React, {useEffect} from 'react';
import {useStore} from "effector-react";

import CarsFilter from "./filter";
import {fetchCarsService} from "../../service/cars.service";
import {CarsModel} from "../../models/response/cars-response.model";
import {$cars} from "../../store/cars.store";

const Cars = () => {

    const cars: CarsModel[] = useStore($cars)

    useEffect(() => {
        (async () => {
            await fetchCarsService({query: {}, params: {}})
        })()
    }, []);


    return (
        <div>
            <CarsFilter />
            {JSON.stringify(cars, null, 2)}
        </div>
    );
};

export default Cars
