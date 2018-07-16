import React from 'react';

const Label = ({ forvalue,value }) => {
    return (
        <label htmlFor={forvalue} className="form__label">{value}</label>
    )
}

export default Label;
