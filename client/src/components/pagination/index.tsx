import React from 'react';
import classes from './style.module.scss'
import {drawPagination} from "./drawPagination";
import {ArrowLeftIcon} from "../../assets/arrowLeftIcon";
import {ArrowRightIcon} from "../../assets/arrowRightIcon";
import PaginationRows from "./rows";

interface PaginationProps {
    pages: number
    activePage: number
    setPage: (p: number) => void
}

const Pagination: React.FC<PaginationProps> = (
    {
        pages,
        activePage,
        setPage
    }
) => {

    const array = new Array(pages).fill(0)

    const handleBtnClick = (num: number) => {
        if (num <= pages) {
            setPage(num)
        }
    }

    const handleNext = () => {
        if(activePage + 1 >= pages){
            setPage(activePage + 1)
        }
    }

    const handlePrev = () => {
        if(activePage > 1){
            setPage(activePage - 1)
        }
    }

    return (
        <div className={classes.paginationContainer}>
            {
                pages <= 0
                    ?
                    <></>
                    :
                    <>
                        <PaginationRows />
                        <button
                            className={`${classes.btn} ${activePage === 1 ? '' : classes.arrowIcon}`}
                            disabled={activePage === 1}
                            onClick={handlePrev}
                        >
                            <ArrowLeftIcon />
                        </button>
                        {drawPagination(array, activePage, handleBtnClick)}
                        <button
                            className={`${classes.btn} ${activePage ===  pages ? '' : classes.arrowIcon}`}
                            disabled={activePage === pages}
                            onClick={handleNext}
                        >
                            <ArrowRightIcon />
                        </button>
                    </>
            }
        </div>
    );
};

export {Pagination}
