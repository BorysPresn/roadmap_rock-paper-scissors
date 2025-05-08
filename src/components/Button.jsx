import React from 'react';

const Button = ({ props, children }) => {
    return <button className={props.className} onClick={props.onClick}>{children}</button>;
};

export default Button;
