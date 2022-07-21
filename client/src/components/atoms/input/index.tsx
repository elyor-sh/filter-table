import React, {InputHTMLAttributes} from 'react';
import classes from './style.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({className, ...props}) => {
    return (
        <input
            className={`${classes.input} ${className ? className : ''}`}
            {...props}
        />
    );
};

export { Input }
