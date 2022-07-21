import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {toast} from "react-toastify";

import {BASE_URL} from "./config";

export const httpRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

httpRequest.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
            toastId: 'AuthResReqError'
        })
        return Promise.reject(error);
    },
);

httpRequest.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Xatolik', {
            toastId: 'ReqError'
        })
        return Promise.reject(error);
    },
);