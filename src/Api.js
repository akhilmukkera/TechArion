

import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import './Api.css';

export default function Api() {
    const [data,setData]=useState([]);
   
    
 useEffect(()=>{
    
      getData();
 },[])

 async function getData(){
    const result=await fetch('https://gorest.co.in/public/v1/todos');
    const store=await result.json();
    console.log(store)
    setData(store.data)
}
    return (
        <div className='grid-container'>
            <table>
                <tbody>
                    {data.map((value,index)=>{
                        return(
                        <tr>
                             <td>{value.id}</td>
                             <td>{value.title}</td>
                             <td>{value.user_id}</td>
                            <td>{value.due_on}</td>
                           
                            
                           
                        </tr>
                        )
                    })}
                </tbody>
            </table>
           
        
            
        </div>
    )
}
