import React, { Fragment, useState } from 'react'
import '../styles/home.css'
import img from '../imgs/fundo.png'
import Block from './block.jsx'
import MapSpace from './mapspace'
import '../styles/media.css'
import axios from 'axios';
import {ReactComponent as Arrow} from '../imgs/icon-arrow.svg'

export default function Home({place,setPlace}) {
    const[ip,setIp] = useState('')  // pega o ip digitado pra ser usado na url
    const[data,setData] = useState({})//serve para pegar as info da api e bota no estado
    
    



      let getIp = async () => {  // func que requisita as infos da api baseado no ip
    let res = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_23qi7nqYDiPGc1FpcAPzqGEaobqsv&ipAddress=${ip}`)
    let req = res
     setData(req.data)
     setPlace({...place,lat:res.data.location.lat,lng:res.data.location.lng}) // pega o lat long vindo da api  e joga no mapa via place

}

// renderizaçao
    return(
        <div className="boss">
        <div className="principal">
        
         <header className="header">
           
            <h1 className="title">IP ADDRESS TRACKER </h1>
            <div className="enterIP">
            <input className="searchIp" type="text" autoFocus placeholder="Search for any IP adress or domain"  onChange={event => setIp(event.target.value)}/>
            <button className="go" onClick={getIp}> <Arrow/> </button>
            </div>
            <Block data={data} />
            
            </header>
            <div className="mapspace">
            <MapSpace place={place} />
            </div>
            
            

            
           


           
        </div>
        </div>
       
    )
}