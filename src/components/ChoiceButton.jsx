import React from 'react';

const ChoiceButton = ({ children, ...restProps }) => {
    return (
        <button className="btn choice-btn" {...restProps}>
            {children}
        </button>
    );
};

export default ChoiceButton;
