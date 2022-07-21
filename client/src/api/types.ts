import {AxiosResponse} from "axios";

interface IPaging {
    currentPage: number
    totalCount: number
    pages: number
}


interface ResponseInterface<T> {
    items: T
    paging: IPaging | null
}

export type AxiosResponseType<T> = Promise<AxiosResponse<ResponseInterface<T>>>