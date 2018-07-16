import React from 'react';

const Input = ({type, value, classvalue}) => {
    return (
        <input type={type} placeholder={`Enter your ${value} here`} name={value} className={classvalue}/>
    )
}

export default Input;