import classes from "./style.module.scss";
import React from "react";

export const drawPagination = (arr: number[], activeNum: number, click: (num: number) => void) => {

    const arrLength = arr.length;

    const returnBtn = (i: number) => (
        <button
            key={i.toString()}
            className={`${classes.btn} ${activeNum === (i + 1) ? classes.active : ''}`}
            onClick={() => click(i + 1)}
        >
            {i + 1}
        </button>
    )


    return arr.map((a, i) => {

        if (i === 0 || i === 1 || i === arrLength - 1 || i === arrLength - 2) {
            return returnBtn(i)
        }

        if (i >= activeNum - 2 && i <= activeNum + 2) {
            return returnBtn(i)
        }

        if (i === activeNum - 3 || i === activeNum + 3) {
            return "...";
        }

        return null
    });
};