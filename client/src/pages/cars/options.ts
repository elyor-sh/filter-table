import {IOptions} from "../../components/atoms/select";

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