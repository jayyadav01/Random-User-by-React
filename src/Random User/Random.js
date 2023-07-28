import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Random() {
    const [img,setimg] = useState('');
    const [name,setname] = useState('');
    const [email,setemail] = useState('');

    useEffect(() => {
        axios.get('https://randomuser.me/api').then((response)=>
        {
            console.log(response.data.results[0]);
            setimg(response.data.results[0].picture.large);
            setname(response.data.results[0].name.first + response.data.results[0].name.last);
            setemail(response.data.results[0].email);
        })  
    } , [])
        
  return (
    <>
        <div className='detail' style={{margin : 20}}>
            <img src={img}></img>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    </>
  )
}

export default Random
