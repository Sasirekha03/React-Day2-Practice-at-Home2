import React from 'react';
const Button= (props) => {
    const handleClick =()=>{
        alert(`Hey!!! You Clicked ${props.text}`);
    };
    return(
        <button onClick={handleClick}>
            {props.text}
        </button>
    );
};
export default Button;