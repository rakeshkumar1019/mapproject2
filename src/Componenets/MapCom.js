import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import "./our.css"

// const position = [51.505, -0.09]

function MapCom({lat,long}) {
  // here lat,long data is comming from props
  return (
    <div className='map__com'>
         <MapContainer center={[lat,long]} zoom={1}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat,long]}> </Marker>
      </MapContainer>
    </div>
  )
}

export default MapCom