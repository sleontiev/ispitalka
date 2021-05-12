import React from 'react';
import './Button.css';

const Button = ({
    text,
    onClick,
    theme,
}) => <button onClick={onClick} className={theme}>{text}</button>

export default Button;
