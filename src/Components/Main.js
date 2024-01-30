import React, { useEffect } from 'react'
import Card from './Card'
import axios from "axios"
import { useState } from 'react'

export const Main = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=052637fea877ffc2a465324d324613e0&hash=7dc8fae8f2a7980d552a57372bfd44a6")
    const [item, setItem]=useState();
    useEffect(()=>{
        const fetch = async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    },[url])

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="https://wallpapercave.com/wp/wp4509365.jpg" alt="" height={378} width={660}/>
            </div>
            <div className="search-bar">
                <img src="https://tse4.mm.bing.net/th?id=OIP.1ITnVv9wwdifX82yfP9eTgHaEK&pid=Api&P=0&h=180" alt="" height={31} width={150}/>
                <input type="search" placeholder='Search' className='search' />
            </div>
        </div>
        <div className="content">
           
            {
                (!item)?<p>Not Found</p> :  <Card data={item}/>
            }
        </div>
    </>
  )
}

export default Main
