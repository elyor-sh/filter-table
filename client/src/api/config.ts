const getBasUrl = (): string => {

    if(process.env.REACT_APP_ENV === 'development'){
        return process.env.REACT_APP_API_URL_DEV!
    }

    if(process.env.REACT_APP_ENV === 'production'){
        return process.env.REACT_APP_API_URL_PROD!
    }

    // если не передана переменная окружения то бросаем ошибку
    throw new Error('Не передана переменная окружения')

}

export const BASE_URL = getBasUrl()

