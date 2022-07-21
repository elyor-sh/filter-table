import React from 'react';
import classes from './style.module.scss'
import TableHead from "./head";
import {TableBody} from "./body";
import {TableBodyCellProps, TableHeadProps} from "./types";

interface TableProps {
    headCells: TableHeadProps[]
    rowCells: TableBodyCellProps[]
    data: any[]
}

const Table: React.FC<TableProps> = (
    {
        headCells,
        rowCells,
        data
    }
) => {
    return (
        <div className={classes.tableWrapper}>
            <table className={classes.table}>
                <TableHead
                    cells={headCells}
                />
                <TableBody
                    cells={rowCells}
                    data={data}
                />
            </table>
        </div>
    );
};

export { Table }
