import React, {memo, useCallback, useEffect} from 'react';
import {useStore} from "effector-react";

import CarsFilter from "./filter";
import {fetchCarsService} from "../../service/cars.service";
import {CarsModel} from "../../models/response/cars-response.model";
import {$carFilterParams, $cars, $pagingCars, setActivePageCars} from "../../store/cars.store";
import {Table} from "../../components/table";
import {tableBodyCellsCars, tableHeadCellsCars} from "./options";
import {$rowCount} from "../../store/common.store";
import {Pagination} from "../../components/pagination";
import {Button} from "../../components/atoms/button";
import {useNavigate} from "react-router-dom";

const Cars = memo(() => {

    const navigate = useNavigate()

    const cars: CarsModel[] = useStore($cars)
    const rowCount = useStore($rowCount)
    const {activePage, pages} = useStore($pagingCars)
    const paramsCars = useStore($carFilterParams)

    const fetchCars = useCallback(() => {
        const query = {
            page: activePage,
            rowCount
        };

        const params = paramsCars.text?.trim() ? {...paramsCars} : {};

        (async () => {
            await fetchCarsService({query, params})
        })()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowCount, activePage]);


    useEffect(() => {
        fetchCars()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage, rowCount]);


    return (
        <div>
            <div className='d-f j-c-f-e m-1'>
                <Button
                    onClick={() => navigate('/cars/create')}
                >
                   + Создать
                </Button>
            </div>
            <CarsFilter/>
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
