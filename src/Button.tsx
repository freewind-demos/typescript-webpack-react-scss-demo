import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
    children,
    onClick
}) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}; 