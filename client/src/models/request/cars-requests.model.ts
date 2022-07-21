
interface PostBody {
    name: string
    count: number
    distance: number
    date?: Date
}

interface PostBodyFilter {
    filterParam?: 'name' | 'count' | 'discount'
    type?: 'equal' | 'contains' | 'more' | 'less'
    text?: string
}


export namespace CarsModelRequestsBody {
    export type post = PostBody
    export type postFilter = PostBodyFilter
}