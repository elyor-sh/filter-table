import React from 'react';
import {TableHeadProps} from "./types";
import classes from './style.module.scss'

interface TableHeadInterface {
    cells: TableHeadProps[]
}

const TableHead: React.FC<TableHeadInterface> = ({cells}) => {
    return (
        <thead className={classes.thead}>
            <tr className={classes.tr}>
                {
                    cells.map(cell => (
                        <td
                            key={cell.text}
                            className={`${classes.td} ${classes.th}`}
                        >
                            {cell.text}
                        </td>
                    ))
                }
            </tr>
        </thead>
    );
};

export default TableHead;
