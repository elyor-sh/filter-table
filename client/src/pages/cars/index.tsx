import React, {useEffect} from 'react';
import {useStore} from "effector-react";

import CarsFilter from "./filter";
import {fetchCarsService} from "../../service/cars.service";
import {CarsModel} from "../../models/response/cars-response.model";
import {$cars} from "../../store/cars.store";
import {Table} from "../../components/table";
import {tableBodyCellsCars, tableHeadCellsCars} from "./options";

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
            <Table
                data={cars}
                headCells={tableHeadCellsCars}
                rowCells={tableBodyCellsCars}
            />
        </div>
    );
};

export default Cars
