import React,{useState} from 'react';
const MyButton=(props)=>{
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
        alert(`Hey!!!You Clicked: ${props.text}`);
    };
    return(
        <button onClick={handleClick}>Click me {count}</button>
    );
};
export default MyButton;