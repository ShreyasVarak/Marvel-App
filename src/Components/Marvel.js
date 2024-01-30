import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Marvel = () => {
    const {id}=useParams();
    const [item,setItem]=useState()
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=052637fea877ffc2a465324d324613e0`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return (
    <>
        (!item)? "":(
            <div className='box-content'>
                <div className="right-box">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
                </div>
                <div className="left-box">
                    <h1>{item.name}</h1>
                    <h4>{item.description}</h4>
                </div>
            </div>
        )
    </>
  )
}

export default Marvel
