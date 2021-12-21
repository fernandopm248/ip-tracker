import '../styles/mapspace.css'
import React, { Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Popup ,useMap} from 'react-leaflet'
import * as s from '../styles/map'

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />



export default function MapSpace({place}) {
  function ChangeView(place) {    // serve para fazer o mapa mexer
    const map = useMap();
    map.setView(place.center, 15); 
    return null;
  }
  
    const position = [place.lat,place.lng]
    //renderizaçoa do mapa 
    return(
        <MapContainer  className="mapspace"  center={[place.lat, place.lng]} zoom={15} scrollWheelZoom={false}>
           <ChangeView center={position} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[place.lat, place.lng]} icon={s.IconLocation}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

   
       
    )
}