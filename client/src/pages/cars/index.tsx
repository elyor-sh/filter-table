import React, {memo, useEffect} from 'react';
import {useStore} from "effector-react";

import CarsFilter from "./filter";
import {fetchCarsService} from "../../service/cars.service";
import {CarsModel} from "../../models/response/cars-response.model";
import {$carFilterParams, $cars, $pagingCars, setActivePageCars} from "../../store/cars.store";
import {Table} from "../../components/table";
import {tableBodyCellsCars, tableHeadCellsCars} from "./options";
import {$rowCount} from "../../store/common.store";
import {Pagination} from "../../components/pagination";

const Cars = memo(() => {

    const cars: CarsModel[] = useStore($cars)
    const rowCount = useStore($rowCount)
    const {activePage, pages} = useStore($pagingCars)
    const paramsCars = useStore($carFilterParams)


    useEffect(() => {

        const query = {
            page: activePage,
            rowCount
        };

        const params = paramsCars.text?.trim() ? {...paramsCars} : {};

        (async () => {
            console.log('vizov')
            await fetchCarsService({query, params})
        })()

    }, [activePage, rowCount]);


    return (
        <div>
            <CarsFilter />
            <Table
                data={cars}
                headCells={tableHeadCellsCars}
                rowCells={tableBodyCellsCars}
            />
            <Pagination
                pages={pages}
                activePage={activePage}
                setPage={setActivePageCars}
            />
        </div>
    );
});

export default Cars
