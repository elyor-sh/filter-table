import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import classes from './style.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button
            className={`${classes.btn} ${className ? className : ``}`}
            {...props}
        >
            {children}
        </button>
    );
};

export {Button}
