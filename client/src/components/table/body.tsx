import React from 'react';
import {TableBodyCellProps} from "./types";
import {drawCells} from "./drawCells";
import classes from './style.module.scss'

interface TableBodyProps {
    cells: TableBodyCellProps[]
    data: any[]
}

const TableBody: React.FC<TableBodyProps> = (
    {
        cells,
        data
    }
) => {
    return (
        <tbody className={classes.tbody}>
        {
            !data.length
            ?
                <tr className={classes.tr}>
                    <td className={classes.td}>
                        Не найден...
                    </td>
                </tr>
                :
            data.map(d => (
                <tr key={d.id} className={classes.tr}>
                    {
                        cells.map(cell => (
                            <td
                                key={cell.uniqueKey}
                                className={classes.td}
                            >
                                {
                                    drawCells(d, cell)
                                }
                            </td>
                        ))
                    }
                </tr>
            ))
        }

        </tbody>
    );
};

export { TableBody }
