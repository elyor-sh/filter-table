import {createEvent, createStore} from "effector";

const rCount = localStorage.getItem('rowCount') ? Number(localStorage.getItem('rowCount')) : 5

export const setRowCount = createEvent<number>()

export const $rowCount = createStore(rCount)
    .on(setRowCount, (_, payload) => {
        
        localStorage.setItem('rowCount', payload.toString())

        return payload
    })