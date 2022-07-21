import React, {InputHTMLAttributes} from 'react';
import classes from './style.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({...props}) => {
    return (
        <input
            className={classes.input}
            {...props}
        />
    );
};

export { Input }
