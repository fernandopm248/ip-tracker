import '../styles/block.css'
import React, { Fragment } from 'react'


export default function Block({data}) { // esse component é bloco do meio , data sao as info vinda da api
    return(
        <Fragment>
        <div className="block"> 

        <div className="ip">
        <span className="top">IP ADDRESS</span>
        <p className="content">{data.ip}</p>
        </div>
       
        
       

        <div className="ip1">
        <span className="top" >LOCATION</span><br/> 
        <span className="content"> {data.location?.city} , {data.location?.region}</span><br/>
            <span className="content">{ data.location?.postalCode}</span>
         



        </div>
        <div className="ip2">
            <span className="top" >TIMEZONE</span><br/>
            <span className="content">UTC{data.location?.timezone}</span><br/>
          


        </div>
        <div className="ip3">
       
            <span className="top" >ISP</span><br/>
            <span className="content">{data.isp}</span><br/>
            
            



        </div>
     

        </div>
       
        </Fragment>
           
      
       
    )
}