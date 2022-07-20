export class CarsCreateDto {
    name: string
    count: number
    distance: number
    date: Date
}


export namespace CarsFilterDtoInterface {
    export type filterParam = 'name' | 'count' | 'discount' | undefined
    export type type = 'equal' | 'contains' | 'more' | 'less' | undefined
}

export class CarsFilterDto {
    filterParam: CarsFilterDtoInterface.filterParam
    type: CarsFilterDtoInterface.type
    text: string = ''
}