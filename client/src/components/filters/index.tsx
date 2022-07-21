import React from 'react';
import {IElementFilter} from "./types";
import {drawFilters} from "./draw";
import classes from './style.module.scss'
import {SearchIcon} from "../../assets/searchIcon";
import {ClearIcon} from "../../assets/clearIcon";


interface FiltersProps {
    elements: IElementFilter[]
    handleSubmit: () => void
    handleClear: () => void
}

const Filters: React.FC<FiltersProps> = ({elements, handleSubmit, handleClear}) => {

    const handleKeyPress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

    return (
        <div className={`d-f a-i-f-e`}>
            {
                elements.map(element => (
                    <div key={element.name} className={classes.filter}>
                        <div className={classes.label}>{element.label}:</div>
                        {drawFilters(element)}
                    </div>
                ))
            }

            {
                elements.length
                &&
                <div className={`${classes.filter} ${classes.btnWrapper}`}>
                    <button
                        className={classes.button}
                        onClick={handleSubmit}
                        onKeyPress={handleKeyPress}
                    >
                        <SearchIcon />
                    </button>
                    <button
                        className={classes.button}
                        onClick={handleClear}
                    >
                        <ClearIcon />
                    </button>
                </div>
            }
        </div>
    );
};

export {Filters}
