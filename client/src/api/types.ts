import {AxiosResponse} from "axios";


interface ResponseInterface<T> {
    items: T
}

export type AxiosResponseType<T> = Promise<AxiosResponse<ResponseInterface<T>>>