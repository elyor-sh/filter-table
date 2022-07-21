import React from 'react';
import {IOptions, Select} from "../atoms/select";
import classes from "./style.module.scss";
import {useStore} from "effector-react";
import {$rowCount, setRowCount} from "../../store/common.store";

const options: IOptions[] = [
    {text: '5', value: 5},
    {text: '10', value: 10},
    {text: '25', value: 25},
    {text: '50', value: 50},
    {text: '100', value: 100},
]

const PaginationRows = () => {

    const rowsPerPage = useStore($rowCount)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowCount(Number(e.target.value))
    }


    return (
        <div className={classes.paginationRows}>
            <span>Количество строк:</span>
            <Select
                options={options}
                className={classes.select}
                value={rowsPerPage}
                onChange={handleChange}
            />
        </div>
    );
};

export default PaginationRows;
