import React, {SelectHTMLAttributes} from 'react';
import classes from './style.module.scss'

export interface IOptions {
    text: string
    value: string | number
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    options: IOptions[]
}

const Select: React.FC<SelectProps> = ({options, className, ...props}) => {
    return (
        <select
            className={`${classes.select} ${className ? className : ''}`}
            {...props}
        >
            {
                options.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.text}
                    </option>
                ))
            }
        </select>
    );
};

export {Select};
