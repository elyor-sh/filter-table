import {TableBodyCellProps} from "./types";

const addZero = (datePart: any) => datePart.toString().padStart(2, '0');

export const drawCells = (row: any, cell: TableBodyCellProps) => {

    switch (cell.type) {

        case "string":
            return row[cell.contentKey] || ''

        case "data":
            if(!row[cell.contentKey]){
                return '-'
            }
            let timeStamp = new Date(row[cell.contentKey]);
            let dateValue = `${addZero(timeStamp.getDate())}.${addZero(timeStamp.getMonth() + 1)}.${timeStamp.getFullYear()}`;
            let timeValue = `${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}`;

            return dateValue + ' ' + timeValue;

        default:
            return null
    }
}