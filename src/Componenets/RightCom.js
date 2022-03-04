import React from 'react'
import CountryCard from './CountryCard'
import CountryTable from './CountryTable'
import MapCom from './MapCom'
import "./our.css"

function RightCom({lat,long,counrtyData,relatedCourties}) {
  return (
    <div className='right__componenet'>
        <div>
           <CountryCard counrtyData={counrtyData}/>
           <MapCom lat={lat} long={long} />
        </div>
        <div className="below__section">
            <CountryTable name ="Case Count" data={relatedCourties}/>
            <CountryTable name ="Recovered Count" data={relatedCourties}/>
            <CountryTable name ="Death Count" data={relatedCourties}/>
        </div>
    </div>
  )
}

export default RightCom