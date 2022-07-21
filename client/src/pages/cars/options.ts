import {IOptions} from "../../components/atoms/select";
import {TableBodyCellProps, TableHeadProps} from "../../components/table/types";

export const columnOptions: IOptions[] = [
    {text: 'Название', value: 'name'},
    {text: 'Количество', value: 'count'},
    {text: 'Расстояние', value: 'distance'},
]

export const conditionOptions: IOptions[] = [
    {text: 'Равно', value: 'equal'},
    {text: 'Содержать', value: 'contains'},
    {text: 'Больше', value: 'more'},
    {text: 'Меньше', value: 'less'},
]


export const tableHeadCellsCars: TableHeadProps[] = [
    {text: 'Дата'},
    {text: 'Название'},
    {text: 'Количество'},
    {text: 'Расстояние'},
]

export const tableBodyCellsCars: TableBodyCellProps[] = [
    {type: 'data', contentKey: 'date', uniqueKey: 'cars_data'},
    {type: 'string', contentKey: 'name', uniqueKey: 'cars_name'},
    {type: 'string', contentKey: 'count', uniqueKey: 'cars_count'},
    {type: 'string', contentKey: 'distance', uniqueKey: 'cars_distance'},
]