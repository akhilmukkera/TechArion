import React,{useState} from 'react'

import './Card.css';

export default function Button() {
    const [count,setCount]=useState(1);

    const increment=()=>{
        setCount(count+3)
    }
    const decrement=()=>{
        setCount(count-3)
    }
    
    return (
        <div className='main'>
            <div className='container'>
            <h2>Counter</h2>
            <button  type="button" onClick={decrement} className='decrement'>-</button>
           <p className='count'>{count}</p>
            <button type='button' onClick={increment} className='increment'>+</button>
            </div>
        </div>
        
    )
}
